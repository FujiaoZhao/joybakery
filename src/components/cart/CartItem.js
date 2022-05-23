import classes from './CartItem.module.css';
import {useDispatch} from "react-redux";
import {cartSliceActions} from "../../store/cartSlice";
import {useRef} from 'react';

const CartItem = (props) => {
  const quantityRef = useRef();
  const price = `$${props.price.toFixed(2)}`;
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(cartSliceActions.removeItem(props.id))
  }

  const updateQuantityHandler = (event) => {
    event.preventDefault();
    dispatch(cartSliceActions.updateQuantity({id: props.id, quantity: quantityRef.current.value}))
  }

  return (
    <li className={classes.item}>

      <h3 className={classes.item_name}>{props.name}</h3>
      <div className={classes.action}>
        <span className={classes.item_price}>Price: {price} X</span>

        <div className={classes.item_detail}>
          <form onSubmit={updateQuantityHandler} className={classes.form}>
            <label htmlFor='quantity' className={classes.form_label}>Qty</label>
            <input
              ref={quantityRef}
              id='quantity'
              type='number'
              min='1'
              placeholder={props.quantity}
              className={classes.form_input}/>
            <button className={classes.btn}>Update Qty</button>
          </form>


          <button onClick={removeItemHandler} className={classes.btn}>Remove</button>
        </div>

      </div>
    </li>
  )
}

export default CartItem;