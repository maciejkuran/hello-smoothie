import classes from './Navbar.module.css';
import logo from '../../assets/img/hello smoothie logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassWater } from '@fortawesome/free-solid-svg-icons';

import PrimaryButton from '../UI/PrimaryButton';
import BottomLine from '../UI/BottomLine';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes['nav__wrapper']}>
        <div className={classes['nav__wrapper--internal']}>
          <img src={logo}></img>
          <PrimaryButton properties={{ type: 'button' }}>
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
