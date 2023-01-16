import classes from './AllProducts.module.css';
import SingleProduct from './SingleProduct';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import useHttp from '../../hooks/useHttp';

const AllProducts = () => {
  const [leftConstraint, setLeftConstraint] = useState(0);
  const allProductsCarouselRef = useRef();

  const { fetchData, data, isError, isLoading } = useHttp();

  //Loading products from the firebase backend
  useEffect(() => {
    fetchData(
      'https://hello-smoothie-7877e-default-rtdb.firebaseio.com/products.json',
      'Problem with fetching data. Please try again.',
      {}
    );
  }, []);

  const smoothies = [];
  for (const key in data) {
    smoothies.push({
      id: key,
      name: data[key].name,
      img: data[key].img,
      amount: data[key].amount,
      ingredients: data[key].ingredients,
      price: data[key].price,
    });
  }

  useEffect(() => {
    const calcConstraint = () => {
      //   Calculating on component mount the maximum width for dragging carousel: fullScrollWidth - actualViewWidth
      setLeftConstraint(
        allProductsCarouselRef.current.scrollWidth - allProductsCarouselRef.current.offsetWidth
      );
    };

    calcConstraint();
    window.addEventListener('resize', calcConstraint);

    return () => window.removeEventListener('resize', calcConstraint);
  }, [data]);

  return (
    <section className={classes['all-products']}>
      <div className={classes['all-products__inner']}>
        <h2>Choose for yourself</h2>
        {isLoading && <p className={classes['all-products-feedback']}>Loading smoothies...</p>}
        {isError && <p className={classes['all-products-feedback']}>{isError}</p>}
        <motion.div
          key={leftConstraint}
          whileTap={{ cursor: 'grabbing' }}
          ref={allProductsCarouselRef}
          className={classes['all-products__carousel']}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -leftConstraint - 10 }}
            className={classes['inner-carousel']}
          >
            {smoothies.map(smoothie => {
              return (
                <SingleProduct
                  key={smoothie.id}
                  id={smoothie.id}
                  name={smoothie.name}
                  amount={smoothie.amount}
                  img={smoothie.img}
                  ingredients={smoothie.ingredients}
                  price={smoothie.price}
                />
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AllProducts;
