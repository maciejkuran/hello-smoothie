import classes from './Input.module.css';

const Input = props => {
  return <input className={`${classes.input} ${props.className}`} {...props.attributes}></input>;
};

export default Input;
