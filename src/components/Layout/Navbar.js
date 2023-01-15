import classes from './Navbar.module.css';
import logo from '../../assets/img/hello smoothie logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassWater } from '@fortawesome/free-solid-svg-icons';

import PrimaryButton from '../UI/PrimaryButton';
import BottomLine from '../UI/BottomLine';
import { CartContext } from '../../store/CartContextProvider';
import { useContext } from 'react';

const Navbar = () => {
  const { openCartHandler } = useContext(CartContext);

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
            <span className={classes['nav__amount']}>1</span>
          </PrimaryButton>
        </div>
        <BottomLine></BottomLine>
      </div>
    </nav>
  );
};

export default Navbar;
