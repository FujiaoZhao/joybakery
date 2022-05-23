import {createSlice} from '@reduxjs/toolkit';

const initialCartState = {
  items: [],
  totalQuantity: 0,
  totalAmount:0,
  changed:false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
      addItem(state,action){
        const newItem = action.payload.item;
        const existingItem=state.items.find(item=>item.id===newItem.id);
        state.totalQuantity=+state.totalQuantity+(+action.payload.quantity);
        state.totalAmount=state.totalAmount + (newItem.price * action.payload.quantity)
        state.changed=true;
        if(!existingItem){
          state.items.push(
            {
              id:newItem.id,
              price:newItem.price,
              quantity:action.payload.quantity,
              totalPrice:newItem.price * action.payload.quantity,
              name:newItem.name,
            }
          )
        }else{
          existingItem.quantity=+(existingItem.quantity)+(+(action.payload.quantity));
          existingItem.totalPrice=existingItem.totalPrice+newItem.price * action.payload.quantity;
        }
      },

      removeItem(state,action){
        const id=action.payload;
        const toRemoveItem=state.items.find(item=>item.id===id);
        state.totalQuantity=+state.totalQuantity-(+toRemoveItem.quantity);
        state.totalAmount=state.totalAmount-(toRemoveItem.price * toRemoveItem.quantity)
        state.changed=true;
        state.items=state.items.filter(item=>item.id!==id);
      },

      updateQuantity(state,action){
        const id=action.payload.id;
        const toUpdateItem=state.items.find(item=>item.id===id);
        state.totalQuantity=+(state.totalQuantity)-(+toUpdateItem.quantity)+(+action.payload.quantity);
        state.totalAmount=state.totalAmount-(toUpdateItem.price*toUpdateItem.quantity)+(toUpdateItem.price*action.payload.quantity)
        state.changed=true;
        toUpdateItem.quantity=action.payload.quantity;
      },

      clearCart(state){
        state={
          items: [],
          totalQuantity: 0,
          totalAmount:0,
          changed:false
        }
      }
    }
  }
)

export default cartSlice;
export const cartSliceActions=cartSlice.actions;
