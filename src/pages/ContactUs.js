import classes from './ContactUs.module.css';
import Card from '../components/UI/Card';
import {ReactComponent as SvgLocation} from "../image/SVG/map-marker.svg";
import {ReactComponent as SvgEmail} from "../image/SVG/email.svg";
import {ReactComponent as SvgAlarm} from "../image/SVG/alarm.svg";
import {ReactComponent as SvgPhone} from "../image/SVG/old-phone.svg";

const ContactUs = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.main_title}>Contact Us</h1>
      <div className={classes.content}>

        <div className={classes.card}>
          <Card>
            <div className={classes.hours_title}>
              <SvgAlarm className={classes.alarm_icon}/>
              <span className={classes.hours_title_name}>Store Hours</span>
            </div>
            <div className={classes.hours_content}>
              <p>Monday to Friday: 10am - 8pm</p>
              <p>Saturday: 9am - 9pm</p>
              <p>Sunday: 10am - 6pm</p>
            </div>
            <div className={classes.hours_title}>
              <span className={classes.hours_title_name}>Special Holiday Hours</span>
            </div>
            <div className={classes.hours_content}>
              <p>Christmas Day: Dec 25th - CLOSED</p>
              <p>New Year's Day: Jan 1st - CLOSED</p>
            </div>
          </Card>
        </div>
        <div className={classes.card}>
          <Card>
            <div className={classes.contact_item}>
              <div className={classes.item_title}>
                <SvgPhone className={classes.contact_icon}/>
                <span className={classes.title_name}>PHONE</span>
              </div>
              <div className={classes.item_detail}>(416)000-0000</div>
            </div>
            <div className={classes.contact_item}>
              <div className={classes.item_title}>
                <SvgLocation className={classes.contact_icon}/>
                <span className={classes.title_name}>ADDRESS</span>
              </div>
              <address className={classes.item_detail}> 222 Joy Bakery Street, Toronto, M1M M2M</address>
            </div>
            <div className={classes.contact_item}>
              <div className={classes.item_title}>
                <SvgEmail className={classes.contact_icon}/>
                <span className={classes.title_name}>E-MAIL</span>
              </div>
              <div className={classes.item_detail}>info@joybakery.com</div>
            </div>
          </Card>
        </div>

      </div>
    </div>
  )
}

export default ContactUs;