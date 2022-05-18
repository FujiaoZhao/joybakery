import CakeItem from "./CakeItem";


const CakeList=(props)=>{
  return(
    <div className=''>
      <CakeItem src={props.src} alt={props.alt} name={props.name} description={props.description} />
    </div>
  )
};

export default CakeList;