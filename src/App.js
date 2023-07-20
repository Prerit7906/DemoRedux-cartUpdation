import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart, sendCartData } from './store/cart-actions';
import Notification from './components/UI/Notification';
import { toggleActions } from './store/toggle';
let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const isClicked = useSelector(state => state.toggle.isClicked);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.toggle.notification);
  useEffect(()=>{
    dispatch(fetchCart());
    setTimeout(() => {
      dispatch(toggleActions.hideNotification());
    }, 3000);
  },[dispatch]);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    };
    if(cart.isposting){
      dispatch(sendCartData(cart)); 
    }
    setTimeout(() => {
      dispatch(toggleActions.hideNotification());
    }, 3000);
  }, [cart, dispatch]);
  return (
    <>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {isClicked && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
