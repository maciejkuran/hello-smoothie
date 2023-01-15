import { createPortal } from 'react-dom';
import classes from './Overlay.module.css';

const Overlay = props => {
  const markup = <div onClick={props.onClick} className={classes.overlay}></div>;

  return createPortal(markup, document.getElementById('modals'));
};

export default Overlay;
