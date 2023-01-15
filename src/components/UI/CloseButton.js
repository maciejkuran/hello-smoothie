import classes from './CloseButton.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const CloseButton = props => {
  return (
    <button className={`${classes['close-button']} ${props.className}`} {...props.attributes}>
      {' '}
      <FontAwesomeIcon icon={faXmark} />
    </button>
  );
};

export default CloseButton;
