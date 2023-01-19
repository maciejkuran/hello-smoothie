import classes from './Footer.module.css';
import React from 'react';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>Copyright© maciejkuran.com, it's a demo version made just for learning purposes</p>
    </footer>
  );
};

export default React.memo(Footer);
