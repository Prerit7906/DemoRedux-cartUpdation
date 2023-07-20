import Card from '../UI/Card';
import {useDispatch } from 'react-redux';
import {cartActions} from '../../store/cart'
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const { id,title, price, description } = props;
  // const cart=useSelector(item=>item.cart);
  const dispatch=useDispatch();
  const addToCartHandler=()=>{
  //   const totalQuantity=cart.totalQuantity+1;
  //   const updatedItems=cart.items.slice();// create copy via slice to avoid mutating original state
  //   const presentItem=updatedItems.find(item=>item.id===id);
  //   if(presentItem){
  //     const updatedItem={...presentItem};// new object + copy existing properties to avoid state mutation
  //     updatedItem.quantity=updatedItem.quantity+1;
  //     updatedItem.totalPrice=updatedItem.totalPrice+price;
  //     const itemIndex=updatedItems.findIndex(item=>item.id===id);
  //     updatedItems[itemIndex]=updatedItem;
  //   }else{
  //       updatedItems.push({
  //         id,title,price,quantity:1,totalPrice:price
  //       })
  //   }
  //   dispatch(cartActions.replaceCart({items:updatedItems,
  //       totalQuantity
  //   }));
  dispatch(cartActions.add({id,title,price}));
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
