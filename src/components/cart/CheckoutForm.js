import classes from './CheckoutForm.module.css'
import {useDispatch} from "react-redux";
import {uiActions} from "../../store/uiSlice";
import {useRef,useState} from 'react';
import {useSelector} from "react-redux";

const CheckoutForm=(props)=>{
  const cartItems=useSelector(state=>state.cart.items)

  const dispatch = useDispatch();
  const cancelCheckoutHandler=()=>{
    dispatch(uiActions.cancel())
  }

  const isEmpty=value=>value.trim()==='';
  const[formValidity, setFormValidity]=useState({
    name:true,
    address:true,
    email:true,
  })
  const nameRef=useRef();
  const addressRef=useRef();
  const emailRef=useRef();
  const messageRef=useRef();

  const confirmHandler=(event)=>{
    event.preventDefault();

    const enteredName=nameRef.current.value;
    const enteredAddress=addressRef.current.value;
    const enteredEmail=emailRef.current.value;
    const enteredMessage=messageRef.current.value;

    const enteredNameIsValid=!isEmpty(enteredName);
    const enteredAddressIsValid=!isEmpty(enteredAddress);
    const enteredEmailIsValid=enteredEmail.includes('@');

    setFormValidity({
      name:enteredNameIsValid,
      address: enteredAddressIsValid,
      email:enteredEmailIsValid
    })

    const formIsValid=enteredNameIsValid && enteredEmailIsValid && enteredAddressIsValid;
    if(!formIsValid){
      return
    }

    props.onConfirm(
      {
        order:cartItems,
        name:enteredName,
        address:enteredAddress,
        email:enteredEmail,
        message:enteredMessage
      }
    )
  }

  return(
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${formValidity.name? '': classes.invalid}`}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameRef} type='text' id='name' />
        {!formValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={`${classes.control} ${formValidity.address? '': classes.invalid}`}>
        <label htmlFor='address'>Your Address</label>
        <input ref={addressRef} type='text' id='address' />
        {!formValidity.address && <p>Please enter a valid address!</p>}
      </div>
      <div className={`${classes.control} ${formValidity.email? '': classes.invalid}`}>
        <label htmlFor='email'>Email</label>
        <input ref={emailRef} type='text' id='email' />
        {!formValidity.email && <p>Please enter a valid email!</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='name'>Message</label>
        <textarea ref={messageRef} type='text' id='message' placeholder='Leave your message(optional)'/>
      </div>

      <div className={classes.actions}>
        <button type='button' onClick={cancelCheckoutHandler}>Cancel</button>
        <button type='submit' className={classes.submit}>Confirm</button>
      </div>
    </form>
  )
}

export default CheckoutForm;