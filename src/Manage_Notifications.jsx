import React from 'react';
import ResponsiveDrawer from './ResponsiveDrawer';
import Dictionary from './Dictionary';
import Analog_clock from './Analog_clock';
import Notification_heading from './Notification_heading';
import Create_notification from './Create_notification';
import Total_notifications from './Total_notifications';
import Footer from './Footer';

const Manage_Notifications =()=>{
    return(
        <>
        <ResponsiveDrawer left_component={<Student_marks_insert_component/>}/>
        </>
    );
}

const Student_marks_insert_component=()=>{
    return(
        <>
        <div className="row">
            <div className="col-12 col-sm-12 col-md-7 col-lg-9">
              <Dictionary/>
            </div>
            <div className="col-12 col-sm-12 col-md-5 col-lg-3">
                <Analog_clock/>
            </div>
            <div className="col-12 mt-3">
                <Notification_heading/>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-12 mt-3">
                <Create_notification/>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-12 mt-3">
                <Total_notifications/>
            </div>
            <div className="col-12 mt-3">
            <Footer/>
            </div>
        </div>

        </>
  );
}
export default Manage_Notifications;