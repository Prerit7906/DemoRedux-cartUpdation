import { createSlice } from "@reduxjs/toolkit";
 const initialState={isClicked:false,notification:null};
 const toggleSlice=createSlice({
    name:'toggle',
    initialState,
    reducers:{
        click(state){
            state.isClicked=!state.isClicked;
        },
        showNotification(state,action){
            state.notification={
                status:action.payload.status,
                title:action.payload.title,
                message:action.payload.message
            };
        },
        hideNotification(state){
            state.notification=null
        }
    }
 });
 
 export const toggleActions=toggleSlice.actions;
 export default toggleSlice;