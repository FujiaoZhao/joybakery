import useHttp from "../../hooks/use-http";
import CakeItem from "./CakeItem";
import{useEffect} from "react";
import{getAllBakedGoods} from "../../lib/api";
import classes from "./AvailableCakes.module.css";

const AvailableBakedGoods=(props)=>{
  const{sendRequest,data:loadedBakedGoods,error,status}=useHttp(getAllBakedGoods,true)
  useEffect(()=>{
    sendRequest()
    }
,[sendRequest])

  if(status==='pending'){
    return <section><p className={classes.CakesLoading}>Loading...</p></section>
  }

  if(error){
    return <section><p className={classes.httpError}>{error}</p></section>
  }

  const bakedGoodsList= loadedBakedGoods.map((good)=>(
    <CakeItem
      id={good.id}
      key={good.id}
      category='baked_goods'
      name={good.name}
      description={good.description}
      price={good.price}
      src={good.src}
      alt={good.alt}
    />
  ))

  return (
    <section className={classes.cakes}>

      {bakedGoodsList}

    </section>
  );

}




export default AvailableBakedGoods;