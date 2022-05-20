import CakeItem from "./CakeItem";
import{useEffect} from "react";
import{getAllCakes} from "../../lib/api";
import useHttp from "../../hooks/use-http";
import classes from "./AvailableCakes.module.css";

const AvailableCakes=(props)=>{
  const{sendRequest,status,data:loadedCakes,error}=useHttp(getAllCakes,true);

  useEffect(()=> {
    sendRequest()

  },[sendRequest])

  if(status==='pending'){
    return <section><p className={classes.CakesLoading}>Loading...</p></section>
  }

  if(error){
    return <section><p className={classes.httpError}>{error}</p></section>
  }

  const cakeList= loadedCakes.map((cake)=>(
    <CakeItem
      id={cake.id}
      key={cake.id}
      category='cakes'
      name={cake.name}
      description={cake.description}
      price={cake.price}
      src={cake.src}
      alt={cake.alt}
    />
  ))

  return (
    <section className={classes.cakes}>

        {cakeList}

    </section>
  );

}




export default AvailableCakes;