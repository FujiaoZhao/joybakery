import classes from './Home.module.css';
import {Fragment} from "react";
import Card from '../components/UI/Card';
import {Carousel} from "react-bootstrap";

const Home = () => {
  return (
    <Fragment>


        <h1 className={classes.title}>Joy Bakery</h1>

      <div className={classes.main}>
        <Carousel fade className={classes.carousel}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../image/sweet_table.JPG')}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Enjoy Your Day </h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../image/Wedding.JPG')}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Celebrate The Special Day</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../image/strawberry_cake.JPG')}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Delicious Strawberry Cake</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className={classes.description}>
          <Card>
            <h2 className={classes.about_us_title}>About Us</h2>
            <p className={classes.about_us_p}>We make gorgeous and delicious cakes!We make gorgeous and delicious
              cakes!We
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
        </div>
      </div>
    </Fragment>

  )
}

export default Home;
