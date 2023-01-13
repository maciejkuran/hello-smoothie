import classes from './AllProducts.module.css';
import SingleProduct from './SingleProduct';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const AllProducts = () => {
  const [leftConstraint, setLeftConstraint] = useState(0);
  const allProductsCarouselRef = useRef();

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
  }, []);

  return (
    <section className={classes['all-products']}>
      <div className={classes['all-products__inner']}>
        <h2>Choose for yourself</h2>
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
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AllProducts;
