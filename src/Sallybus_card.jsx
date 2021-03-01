import React from 'react';
import Stop from '@material-ui/icons/Stop';
const Sallybus_card =()=>
{
    const card_styles={
        color:"lightgray",
        margin:"0px"
    }
    return(
        <>
        <p style={{fontSize:"16px" ,card_styles, padding:"0px"}} >Sallybus</p>
        <p style={{padding:"0px",marginTop:"-25px", marginBottom:"-5px"}}><span className="labels" style={{fontSize:"10px", color:"lightgray"}}><Stop style={{padding:"0px", paddingBottom:"5px",paddingTop:"0px",margin:"0px"}}/>Covered</span><span className="labels" style={{fontSize:"10px", color:"lightgray"}}><Stop style={{padding:"0px", paddingBottom:"5px",paddingTop:"0px",margin:"0px"}}/>Remaining</span></p>
        <p style={{color:"lightgray",fontSize:"12px", margin:"3px"}}>Covered</p>
        <div class="progress" style={{height:"4px"}}>
        <div class="progress-bar" role="progressbar"  style={{width: "40%",backgroundColor:"#42b72a"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <p style={{color:"lightgray", fontSize:"12px", margin:"3px"}}>Remaining</p>
        <div class="progress" style={{height:"4px", marginBottom:"0px"}}>
        <div class="progress-bar" role="progressbar"  style={{width: "75%",  backgroundColor:"#2477ff"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        </>
    );
}
export default Sallybus_card;