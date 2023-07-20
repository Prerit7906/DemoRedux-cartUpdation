import { useDispatch,useSelector } from 'react-redux';
import {toggleActions} from '../../store/toggle'
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const badge=useSelector(state=>state.cart.totalQuantity);
  const dispatch=useDispatch();
  const toggleHandler=()=>{
    dispatch(toggleActions.click());
  };
  return (
    <button onClick={toggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{badge}</span>
    </button>
  );
};

export default CartButton;
