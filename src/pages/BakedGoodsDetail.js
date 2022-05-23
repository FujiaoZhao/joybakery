import {useParams} from "react-router-dom";
import useHttp from "../hooks/use-http";
import {getSingleBakedGood} from "../lib/api";
import{useEffect} from "react";
import ProductDetail from "../components/cakes/ProductDetail";
import NotFound from "./NotFound";

const BakedGoodsDetail=()=>{
  const params=useParams();
  const{bakedGoodId}=params;

  const{sendRequest,status,data:loadedBakedGood,error}=useHttp(getSingleBakedGood,true);

  useEffect(()=>{
    sendRequest(bakedGoodId);
  },[sendRequest,bakedGoodId])

  if(status==='pending'){
    return(
      <section><p className='centered'>Loading...</p></section>
    )
  }

  if(error){
    return <p className='centered'>{error}</p>
  }
  if(!loadedBakedGood){
    return <NotFound/>
  }
  return(
    <ProductDetail
      id={bakedGoodId}
      src={loadedBakedGood.src}
      alt={loadedBakedGood.alt}
      name={loadedBakedGood.name}
      description={loadedBakedGood.description}
      price={loadedBakedGood.price}
    />

  )
}

export default BakedGoodsDetail;