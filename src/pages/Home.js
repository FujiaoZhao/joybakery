import classes from './Home.module.css';
import {Fragment} from "react";
import Card from '../components/UI/Card';

const Home = () => {
  return (
    <Fragment>

      <div className={classes.title}>
        <h1>Joy Bakery</h1>
      </div>

      <div className={classes.description}>
        <Card className={classes.about_us}>
          <h2 className={classes.about_us_title}>About Us</h2>
          <p className={classes.about_us_p}>We make gorgeous and delicious cakes!We make gorgeous and delicious cakes!We
            make gorgeous and delicious
            cakes!We make gorgeous and delicious cakes!We make gorgeous and delicious cakes!We make gorgeous and
            delicious cakes!We make gorgeous and delicious cakes!We make gorgeous and delicious cakes!We make gorgeous
            and delicious cakes!We make gorgeous and delicious cakes!We make gorgeous and delicious cakes!</p>
          <br/>
          <p className={classes.about_us_p}>We love Joy Bakery!We love Joy Bakery!We love Joy Bakery!We love Joy
            Bakery!We love Joy Bakery!We love Joy
            Bakery!We love Joy Bakery!We love Joy Bakery!We love Joy Bakery!We love Joy Bakery!We love Joy Bakery!We
            love Joy Bakery!</p>
        </Card>

        <div className={classes.gallery}>


          <figure className={classes.gallery_item_4}>
            <img src={require('../image/sweet_table.JPG')} alt='sponge cake' className={classes.gallery_photo}/>
          </figure>
          <figure className={classes.gallery_item_1}>
            <img src={require('../image/Wedding.JPG')} alt='wedding cake' className={classes.gallery_photo}/>
          </figure>
          <figure className={classes.gallery_item_5}>
            <img src={require('../image/strawberry_cake.JPG')} alt='sponge cake' className={classes.gallery_photo}/>
          </figure>

        </div>
      </div>
    </Fragment>

  )
}

export default Home;
