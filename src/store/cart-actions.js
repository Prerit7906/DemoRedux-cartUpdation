import { cartActions } from "./cart";
import { toggleActions } from "./toggle";
//this is a custom action creater, it is a kind of thunks
 //thunks are the functions that delays some action for some time untill a task is completed
 export const sendCartData = (cart) => {
    return (dispatch) => {
        dispatch(toggleActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data'
        }));
        const sendData = async () => {
            const response = await fetch('https://mybackend-bf49e-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            });
            if (!response.ok) {
                throw new Error("Could not upload!!");
            }
            dispatch(toggleActions.showNotification({
                status: 'success',
                title: 'Success! ',
                message: 'Cart items updated'
            }));
        };
        sendData().catch((error)=>{
            dispatch(toggleActions.showNotification({
                status: 'error',
                title: 'Error! ',
                message: 'Cart items could not be sent!!'
              }));
        });
    };
};
export const fetchCart=()=>{
    return (dispatch)=>{
        const fetchData=async()=>{
            const response=await fetch('https://mybackend-bf49e-default-rtdb.firebaseio.com/cart.json');
            if(!response.ok){
                throw new Error('Could not fetch items !!');
            }
            const responseData=await response.json();
            dispatch(cartActions.replaceCart({
                items:responseData.items || [],
                totalQuantity:responseData.totalQuantity 
            }));
        };
        fetchData().catch((error)=>{
            dispatch(toggleActions.showNotification({
                status: 'error',
                title: 'Error! ',
                message: 'Cart items could not be fetched!!'
            }));
        });
    };
};