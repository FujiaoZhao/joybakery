import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import {useSelector} from "react-redux";
import {uiActions} from "../../store/uiSlice";
import {useDispatch} from "react-redux";

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount).toFixed(2);
  const dispatch = useDispatch();
  const showCheckoutFormHandler = () => {
    dispatch(uiActions.checkout())
  }
  return (
    <div>
      <h2 className={classes.title}>Shopping Cart</h2>
      {cartItems.length === 0 && <p className='centered'>Your cart is empty!</p>}
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            totalPrice={item.totalPrice}
          />
        ))}
      </ul>
      <div className={classes.checkout}>
        <h2>Total Amount:${totalAmount}</h2>
        <button disabled={cartItems.length === 0}
                onClick={showCheckoutFormHandler}
                className={classes.btn}>PROCEED TO CHECKOUT</button>
      </div>
    </div>
  )
}

export default Cart;