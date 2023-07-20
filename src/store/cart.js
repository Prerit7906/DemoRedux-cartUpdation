import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: [],
    totalQuantity: 0,
    isposting:false
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        replaceCart(state, action) {
            state.items = action.payload.items;
            state.totalQuantity = action.payload.totalQuantity;
        },
        add(state, action) {
            const Item = action.payload;
            const presentItem = state.items.find(item => item.id === Item.id);
            if (presentItem) {
                presentItem.quantity++;
                presentItem.totalPrice = presentItem.totalPrice + Item.price;
            }
            else {
                state.items.push({
                    id: Item.id,
                    title: Item.title,
                    price: Item.price,
                    quantity: 1,
                    totalPrice: Item.price
                });
            }
            state.totalQuantity++;
            state.isposting=true;
        },
        remove(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            }
            else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
            state.totalQuantity--;
            state.isposting=true;
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;