import classes from './Navbar.module.css';
import logo from '../../assets/img/hello smoothie logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassWater } from '@fortawesome/free-solid-svg-icons';

import PrimaryButton from '../UI/PrimaryButton';
import BottomLine from '../UI/BottomLine';
import { CartContext } from '../../store/CartContextProvider';
import { useContext, useEffect, useState } from 'react';

const Navbar = () => {
  const { openCartHandler, items } = useContext(CartContext);
  const [bounceQuantity, setBounceQuantity] = useState(false);

  const cartQuantity =
    items.length >= 1 ? items.map(item => item.quantity).reduce((acc, val) => acc + val) : 0;

  useEffect(() => {
    if (cartQuantity === 0) return;

    setBounceQuantity(true);

    const timer = setTimeout(() => {
      setBounceQuantity(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [cartQuantity]);

  const quantitySpanClassName = `${classes['nav__quantity']} ${
    bounceQuantity ? classes['nav__quantity--bounce'] : ''
  }`;

  const navCartQuantityMarkup =
    cartQuantity >= 1 ? <span className={quantitySpanClassName}>{cartQuantity}</span> : '';

  return (
    <nav className={classes.nav}>
      <div className={classes['nav__wrapper']}>
        <div className={classes['nav__wrapper--internal']}>
          <img src={logo}></img>
          <PrimaryButton attributes={{ type: 'button', onClick: openCartHandler }}>
            <span>
              <FontAwesomeIcon icon={faGlassWater} />
            </span>
            <span>Cart</span>
            {navCartQuantityMarkup}
          </PrimaryButton>
        </div>
        <BottomLine></BottomLine>
      </div>
    </nav>
  );
};

export default Navbar;
