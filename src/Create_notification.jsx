import React from 'react';
import {useState} from 'react';
import axios from 'axios';
const Create_notification=()=>{
    const [notification, setNotification]= useState({
        notification_title:"",
        notification_details:""
    });
    const get_values=(event)=>{
        const {name,value}=event.target;
        setNotification((prevdata)=>{
            return{
                ...prevdata,
                [name]: value
            }

        });
    }
    const submit_form = (event)=>{
        event.preventDefault();
        const notify_obj={
            title:notification.notification_title,
            details:notification.notification_details
        }
        axios.post(`http://localhost/school_dashboard/notification.php`,notify_obj ).then(res=>console.log(res.data)).catch((error)=>console.log(error));
        setNotification({
                notification_title:"",
                notification_details:""
        });
       
    }
    return(
        <>
        <div className="card create_notification">
            <div className="card-body">
                <div className="noti">
                <form method="post" onSubmit={submit_form}>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Notification Title</label>
                        <input type="text" className="form-control" name="notification_title" onChange={get_values} value={notification.notification_title} id="exampleFormControlInput1" placeholder="Title"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Notification Details</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" onChange={get_values} value={notification.notification_details} name="notification_details" rows="3" placeholder="Notification Details..."></textarea>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-success" type="submit">Notify</button>
                    </div>
                </form>
                
            </div>
            </div>
        
        </div>
        </>
    );
}
export default Create_notification;