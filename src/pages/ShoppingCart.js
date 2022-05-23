import Cart from "../components/cart/Cart";
import CheckoutForm from "../components/cart/CheckoutForm";
import {Fragment} from "react";
import {useSelector} from "react-redux";
import useHttp from "../hooks/use-http";
import {submitOrder} from "../lib/api";
import {cartSliceActions} from "../store/cartSlice";
import {useDispatch} from "react-redux";

const ShoppingCart = () => {
  const{sendRequest,status,error}=useHttp(submitOrder);
  const showCheckoutForm=useSelector(state=>state.ui.showCheckoutForm);
  const dispatch=useDispatch();
  const sendOrderHandler=(orderData)=>{
    sendRequest(orderData);
    dispatch(cartSliceActions.clearCart())
  }
  return (
    <Fragment>
      <Cart/>
      {showCheckoutForm && <CheckoutForm onConfirm={sendOrderHandler}/>}
      {error && <p>order failed</p>}
      {!error && status==='completed' && <p>Sent your order successfully</p>}
    </Fragment>
  )
}

export default ShoppingCart;