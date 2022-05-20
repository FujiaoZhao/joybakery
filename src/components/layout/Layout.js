
import Header from "./Header";
import classes from "./Layout.module.css";
import {Fragment} from "react";

const Layout = (props) => {

  return (
    <Fragment>
      <div className={classes.header}>
        <Header/>
      </div>

      <main className={classes.main}>{props.children}</main>

    </Fragment>
  )
}

export default Layout;