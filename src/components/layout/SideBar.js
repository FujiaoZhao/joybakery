import classes from './SideBar.module.css';
import {NavLink, Link} from "react-router-dom";
import {ReactComponent as SvgCake} from "../../image/SVG/birthday-cake.svg";
import {ReactComponent as SvgCupcake} from "../../image/SVG/cupcake.svg";
import {ReactComponent as SvgPhone} from "../../image/SVG/phone-square.svg";
import {ReactComponent as SvgCoffee} from "../../image/SVG/coffee.svg";
import {ReactComponent as SvgFacebook} from "../../image/SVG/facebook.svg";
import {ReactComponent as SvgTwitter} from "../../image/SVG/twitter.svg";

const SideBar = () => {
  return (
    <nav className={classes.sidebar}>
      <ul className={classes.side_nav}>
        <li>
          <NavLink to='/cakes' className={classes.nav_link}>
            <SvgCake className={classes.icon}/>
            <span>Cakes</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/baked-goods' className={classes.nav_link}>
            <SvgCupcake className={classes.icon}/>
            <span>Baked Goods</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/cafe' className={classes.nav_link}>
            <SvgCoffee className={classes.icon}/>
            <span>Cafe</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' className={classes.nav_link}>
            <SvgPhone className={classes.icon}/>
            <span>Contact</span>
          </NavLink>
        </li>
      </ul>

      <div className={classes.legal}>
        <div className={classes.social}>
          <Link>
            <SvgFacebook className={classes.social_icon}/>
          </Link>
          <Link>
            <SvgTwitter className={classes.social_icon}/>
          </Link>
        </div>
        &copy; 2022 by Joy Bakery. All rights reserved.
      </div>
    </nav>
  )
}

export default SideBar;