import classes from "./Header.module.css";
import {ReactComponent as SvgSearch} from "../../image/SVG/search.svg";
import {ReactComponent as SvgLogo} from "../../image/SVG/cake.svg"
import {ReactComponent as SvgCart} from "../../image/SVG/shopping-cart.svg";
import {ReactComponent as SvgUser} from "../../image/SVG/user.svg";
import {Link, NavLink} from "react-router-dom";
import {ReactComponent as SvgCake} from "../../image/SVG/birthday-cake.svg";
import {ReactComponent as SvgCupcake} from "../../image/SVG/cupcake.svg";
import {ReactComponent as SvgCoffee} from "../../image/SVG/coffee.svg";
import {ReactComponent as SvgPhone} from "../../image/SVG/phone-square.svg";


const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.header_top}>
        <Link to='/home' className={classes.logo}>
          <SvgLogo className={classes.logo_icon}/>
          <span className={classes.logo_name}>Joy Bakery</span>
        </Link>

        <form className={classes.search}>
          <input type='text' placeholder='Search Cakes'/>
          <button className={classes.search_button}>
            <SvgSearch className={classes.search_icon}/>
          </button>
        </form>
        <nav className={classes.nav}>
          <button className={classes.nav_button}>
            <SvgCart className={classes.nav_icon}/>
            <span>Cart</span>
            <span className={classes.cart_badge}>3</span>
          </button>
          <button className={classes.nav_button}>
            <SvgUser className={classes.nav_icon}/>
            <span>Log In</span>
          </button>
          <button className={classes.nav_button}>
            <span>Log Out</span>
          </button>
        </nav>
      </div>


      <ul className={classes.side_nav}>
        <li className={classes.side_nav_button}>
          <NavLink to='/cakes' className={classes.side_nav_link}>
            <SvgCake className={classes.side_nav_icon}/>
            <span>Cakes</span>
          </NavLink>
        </li>
        <li className={classes.side_nav_button}>
          <NavLink to='/baked-goods' className={classes.side_nav_link}>
            <SvgCupcake className={classes.side_nav_icon}/>
            <span>Baked Goods</span>
          </NavLink>
        </li>
        <li className={classes.side_nav_button}>
          <NavLink to='/cafe' className={classes.side_nav_link}>
            <SvgCoffee className={classes.side_nav_icon}/>
            <span>Cafe</span>
          </NavLink>
        </li>
        <li className={classes.side_nav_button}>
          <NavLink to='/contact-us' className={classes.side_nav_link}>
            <SvgPhone className={classes.side_nav_icon}/>
            <span>Contact</span>
          </NavLink>
        </li>
      </ul>

    </div>
  )
}

export default Header;