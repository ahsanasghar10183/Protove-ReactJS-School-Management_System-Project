import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Facebook from '@material-ui/icons/Facebook';
import './css/Login_style.scss';
import Teacher_sign_up_form from './Teacher_sign_up_form';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {useEffect} from 'react';
import Result_view from './Result_view';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Teacher_sign_up_page from './Teacher_sign_up_page';
import {useLocation} from 'react-router-dom';
const Teacher_login_form=(prop)=>
{
    
    const [Username_g, setUsername_g]= useState();
    const history =useHistory();
    const [decision, setDecision]=useState(0);
    const [logincredentials, setLogincredentials]=useState(
        {
            login_username:"",
            login_email:"",
            login_password:""
        }
    );
    const get_input_value=(event)=>
    {
        const {name,value}=event.target;
        setLogincredentials((prevdata)=>
        {
            return{
                ...prevdata,
                [name]:value
             }

        });
    }
   
    const form_submit=(event)=>
    {
        event.preventDefault();
        history.push("./Dashboard_teachers");
        const login_obj = {
            Username:logincredentials.login_username,
            Email:logincredentials.login_email,
            Password:logincredentials.login_password
        }
        axios.post(`http://Localhost/school_dashboard/Teacher_login_insert_backend.php`, login_obj).then(res=>res.data).catch((error)=>console.log(error));
    /*    login_data.map((curr, index)=>{
            if(logincredentials.login_username == curr.Username && logincredentials.login_email==curr.Email && logincredentials.login_password==curr.Password)
            {
                setUsername_g("Ahsan Asghar Name");
               alert("You Have Successfully Logged Into Your Eduflex Account!");
            }
       });
       */
   
    }    
 

    return(
        <> 
            <div className="form_container col-10 col-sm-10 col-md-7 col-lg-8 mx-auto">
                <h1 className="text-center ">Login in to eduflex Dashboard!</h1>
                <div className="col-12 mb-auto">
                <Button variant="contained"  className="login_with_media_buttons col-12 col-sm-12 col-md-12 col-lg-6"><Facebook style={{color:"#4267B2"}}/>Login with Facebook</Button>
                <Button variant="contained" className="login_with_media_buttons col-12 col-sm-12 col-md-12 col-lg-6" ><Facebook style={{color:"#4267B2"}}/>Login With Google</Button>
                </div>
                <br/>
                <form method="post" onSubmit={form_submit} >
                    <div className="mb-3">
                        <input type="text" className="p-3 form-control" onChange={get_input_value} value={logincredentials.login_username} name="login_username" placeholder="Username" id="Usernameid" aria-describedby="usernametag"/>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="p-3 form-control" onChange={get_input_value} value={logincredentials.login_email} name="login_email" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="p-3 form-control" onChange={get_input_value} name="login_password" value={logincredentials.login_password} placeholder="Password" id="Password_input"/>
                    </div>
                
                    <button type="submit" className="btn btn-primary text-white col-12" >Login</button>                 

                </form>
            </div>

        </>
    );

}
export default Teacher_login_form;