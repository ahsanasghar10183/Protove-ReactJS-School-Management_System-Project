import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Facebook from '@material-ui/icons/Facebook';
import './css/Login_style.scss';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Main from './Dashboard_teachers';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useEffect} from 'react';
const Student_sign_up_form=()=>
{
    const [signupError, setSignupError]= useState();
    const [isAlreadyRegistered, setAlreadyRegistered]= useState();
    const [signUpcredentials, setSignUpcredentials]=useState(
        {
            sign_up_username:"",
            sign_up_email:"",
            sign_up_password:"",
            sign_up_regno:""

        }
    );
    const get_input_value=(event)=>
    {
        const {name,value}=event.target;
        setSignUpcredentials((prevdata)=>
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
        const Sign_up_obj={

            Username:signUpcredentials.sign_up_username,
            Email:signUpcredentials.sign_up_email,
            Password:signUpcredentials.sign_up_password,
            S_ID:signUpcredentials.sign_up_regno
        }
        axios.post(`http://Localhost/school_dashboard/Student_sign_up_insert.php`, Sign_up_obj).then(res=>console.log(res.data)).catch((error)=>console.log(error));
        setSignUpcredentials({
            sign_up_username:"",
            sign_up_email:"",
            sign_up_password:"",
            sign_up_regno:""
        });
        const View = async ()=>
        { 
          const res = await axios.get(`http://Localhost/school_dashboard/Student_sign_up_insert.php`);
          setAlreadyRegistered(res.data);
          if(isAlreadyRegistered==1)
          {
              setSignupError("Sorry User Already Registered!");
              console.log(signupError);
          }
        }
    }
    return(
        <>
            <div className="form_container col-10 col-sm-10 col-md-7 col-lg-7 mx-auto">
                <h1 className="text-center">Sign Up to eduflex Dashboard!</h1>
                <div className="col-12">
                   <Button variant="contained"  className="login_with_media_buttons col-12 col-sm-12 col-md-12 col-lg-6"><Facebook style={{color:"#4267B2"}}/>Sign Up with Facebook</Button>
                   <Button variant="contained" className="login_with_media_buttons col-12 col-sm-12 col-md-12 col-lg-6" ><Facebook style={{color:"#4267B2"}}/>Sign Up With Google</Button>
                </div> 
                <form method="post" onSubmit={form_submit} >
                   
                    <div className="mb-3">
                        <input type="text" name="sign_up_username" className="p-3 form-control" onChange={get_input_value} value={signUpcredentials.sign_up_username} placeholder="Username" id="username_signup" aria-describedby="sign_upusername"/>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="p-3 form-control" onChange={get_input_value} value={signUpcredentials.sign_up_email} name="sign_up_email" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="p-3 form-control" onChange={get_input_value} name="sign_up_password" value={signUpcredentials.sign_up_password} placeholder="Password" id="InputPasswordsignup"/>
                    </div>
                    <div className="mb-3">
                        <input type="number" className="p-3 form-control" onChange={get_input_value} name="sign_up_regno" value={signUpcredentials.sign_up_regno} placeholder="Roll No" id="regno_signup"/>
                    </div>
                    <button type="submit" className="btn btn-primary text-white col-12" >Sign Up</button>
                </form>
            </div>
        </>

    );
}

export default Student_sign_up_form;