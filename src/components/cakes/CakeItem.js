import {Link} from "react-router-dom";
import classes from "./CakeItem.module.css";

const CakeItem = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.cake}>
        <img src={props.src} alt={props.alt} className={classes.img}/>
        <h2 className={classes.name}>{props.name}</h2>
        <p className={classes.description}>{props.description}</p>
      </div>
      <div className={classes.btn}>
        <Link className={classes.btn_link} to={`/${props.category}/${props.id}`}>View Product</Link>
      </div>
    </div>

  )
}

export default CakeItem;