import {useParams} from "react-router-dom";
import useHttp from "../hooks/use-http";
import {getSingleCake} from "../lib/api";
import{useEffect} from "react";
import ProductDetail from "../components/cakes/ProductDetail";
import NotFound from "./NotFound";

const CakesDetail=()=>{
  const params=useParams();

  const{cakeId}=params;
  const{sendRequest,status,data:loadedCake,error}=useHttp(getSingleCake,true);

  useEffect(()=>{
    sendRequest(cakeId);
  },[sendRequest,cakeId])

  if(status==='pending'){
    return(
     <section><p className='centered'>Loading...</p></section>
    )
  }

  if(error){
    return <p className='centered'>{error}</p>
  }
  if(!loadedCake){
    return <NotFound/>
  }
  return(
  <ProductDetail
    id={cakeId}
    src={loadedCake.src}
    alt={loadedCake.alt}
    name={loadedCake.name}
    description={loadedCake.description}
    price={loadedCake.price}
  />
  )
}

export default CakesDetail;