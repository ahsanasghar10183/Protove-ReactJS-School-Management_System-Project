import React from 'react';
import Cards_area from './Cards_area';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Insert_page from './Insert_page';
import axios from 'axios';
import {useEffect} from 'react';
import {useState} from 'react';
import ResponsiveDrawer from './ResponsiveDrawer';

const Dashboard_teachers=()=>
{
    const [Login_data, setLogin_data]= useState([]);
    useEffect(()=>{
        const Load_login_data = async ()=>
        {
          const res = await axios.get('http://localhost/school_dashboard/Teacher_login_insert_backend.php');
          setLogin_data(JSON.parse(JSON.stringify(res.data)));
        }
    Load_login_data();
    console.log(Login_data.Username);
    console.log("This is console data");
    },[]);
  

    return(
        <>
            <div className="main">
            <ResponsiveDrawer left_component={<Cards_area/>}/>
            </div>
     
        
       
        </>
    );
}
export default Dashboard_teachers;