import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import {useEffect} from 'react';
const Notification_comp=(prop)=>
{
    return(
        <>
       
        <div className="Notification_comp">
            <div className="d-inline-block check_b">
                <div className="notification-title">
                    {prop.title}
                </div>
                <div className="notification-details">
                    {prop.details}
                </div>

            </div>
         
        </div>
    </>
    );
}
const Total_notifications=()=>
{
    const [notification_data, setNotification_data]= useState([]);
    useEffect(()=>{
        const View = async ()=>
        { 
          const res = await  axios.get(`http://localhost/school_dashboard/Display_notifications.php`);
          setNotification_data(res.data);
          console.log(notification_data);
        }
    View();
    console.log(notification_data);
    },[]);
            return(
                <>
                <div className="card total_notifications">
                    <div className="card-body">
                    <div className="today_p">
                        <h3>Total Notifications<span className="badge rounded-pill font-weight-normal bg-success float-right">5</span></h3>
                        {
                           notification_data.map((curr, index)=>{
                               
                                return(
                                    <Notification_comp title={curr.N_TITLE} details={curr.N_DETAILS} key={index}/>
                                );
                        })
                        }   
                        
        
                    </div>
                    </div>
               
        
                </div>
        
                </>
            );    

}

export default Total_notifications;
export {Total_notifications, Notification_comp};