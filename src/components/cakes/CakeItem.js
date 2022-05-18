import Card from '../UI/Card';
import {Link} from "react-router-dom";
import classes from "./CakeItem.module.css";
const CakeItem = (props) => {
  return (
    <Card>
      <div className={classes.cake}>
        <img src={props.src} alt={props.alt}/>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
      <div className={classes.btn}>
        <Link to='/#'>View Cake</Link>
      </div>
    </Card>
  )
}

export default CakeItem;