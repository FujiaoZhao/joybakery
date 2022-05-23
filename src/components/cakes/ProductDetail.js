import classes from "./ProductDetail.module.css";
import {cartSliceActions} from "../../store/cartSlice";
import {useRef} from 'react';
import {useDispatch} from "react-redux";

const ProductDetail = (props) => {

  const quantityRef=useRef();
  const dispatch=useDispatch();

  const addToCartHandler=(event)=>{
    event.preventDefault();
    dispatch(cartSliceActions.addItem({
      item: {
        id:props.id,
        name:props.name,
        price:props.price,
      } ,
      quantity:quantityRef.current.value,
      }))
  }
  return (
    <div className={classes.content}>
      <img src={props.src} alt={props.alt} className={classes.image}/>
      <div className={classes.product_detail}>
        <div>
          <h2 className={classes.product_name}>{props.name}</h2>
          <p className={classes.product_price}>${props.price.toFixed(2)}</p>
        </div>

        <p className={classes.product_description}>{props.description}</p>

        <form onSubmit={addToCartHandler} className={classes.form}>

          <div className={classes.quantity}>
            <label htmlFor='quantity'>Qty</label>
            <input
              ref={quantityRef}
              className={classes.input_quantity}
              type='number'
              id='quantity'
              min='1'
              defaultValue='1'/>
          </div>
          <button className={classes.btn}>ADD TO CART</button>
        </form>
      </div>
    </div>
  )
}

export default ProductDetail;