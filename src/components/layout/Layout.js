import SideBar from "./SideBar";
import Header from "./Header";
import classes from "./Layout.module.css";


const Layout = (props) => {

  return (
      <div className={classes.container}>
        <div className={classes.header}>
          <Header />
        </div>

        <div className={classes.content}>
          <SideBar className={classes.sidebar}/>
          <main className={classes.main}>{props.children}</main>
        </div>
      </div>
  )
}

export default Layout;