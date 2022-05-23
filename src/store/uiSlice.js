import {createSlice} from '@reduxjs/toolkit';

const uiInitialState={
  showCheckoutForm:false,
}

const uiSlice=createSlice({
  name:'ui',
  initialState:uiInitialState,
  reducers:{
    checkout(state){
      state.showCheckoutForm=true
    },
    cancel(state){
      state.showCheckoutForm=false
    }
  }
})

export default uiSlice;
export const uiActions=uiSlice.actions;