import classes from "./Header.module.css";
import {ReactComponent as SvgSearch} from "../../image/SVG/search.svg";
import {ReactComponent as SvgLogo} from "../../image/SVG/cake.svg"
import {ReactComponent as SvgCart} from "../../image/SVG/shopping-cart.svg";
import {ReactComponent as SvgUser} from "../../image/SVG/user.svg";
import {Link} from "react-router-dom";


const Header = () => {
  return (
    <div className={classes.header}>
      <Link to='/home' className={classes.logo}>
        <SvgLogo className={classes.logo_icon}/>
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
  )
}

export default Header;