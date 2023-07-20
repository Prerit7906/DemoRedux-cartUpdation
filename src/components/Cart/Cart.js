import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const storeItems=useSelector(state=>state.cart.items);
  const totalQuantity=useSelector(state=>state.cart.totalQuantity);
  const items=storeItems.map(item=><CartItem
    key={item.id}
    item={{id:item.id, title: item.title, quantity: item.quantity,total:item.totalPrice, price: item.price }}
  />)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {!totalQuantity && <h3>No item found</h3>}
      {totalQuantity>0 &&
      <ul>
        {items}
      </ul>
       }
    </Card>
  );
};

export default Cart;
