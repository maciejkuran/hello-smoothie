import { createPortal } from 'react-dom';
import classes from './Overlay.module.css';

const Overlay = () => {
  const markup = <div className={classes.overlay}></div>;

  return createPortal(markup, document.getElementById('modals'));
};

export default Overlay;
