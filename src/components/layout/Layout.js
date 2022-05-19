
import Header from "./Header";
import classes from "./Layout.module.css";


const Layout = (props) => {

  return (
    <div>
      <div className={classes.header}>
        <Header/>
      </div>

      <main className={classes.main}>{props.children}</main>

    </div>
  )
}

export default Layout;