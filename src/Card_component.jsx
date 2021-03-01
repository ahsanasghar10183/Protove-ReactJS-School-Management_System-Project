import React from 'react';
import CallMadeIcon from '@material-ui/icons/CallMade';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
const Card_component=(prop)=>
{
    return(
        <>
        <div className="comp">
        <div className="card">
        <div className="card-body" >
        <p className="card-title" >{prop.title}</p>
            
        </div>
        </div>
        </div>
        </>
    );
}
const Lower_card_component=(prop)=>
{
    return(
        <>
        <div className="lower_comp">
        <div className="card">
        <div className="card-body" >
            <p className="card-title" ><h6 >{prop.lower_title}</h6></p>
            <p className="points">435</p>
            <span className="lower_card_style_span">
            <p>+{prop.points_upper}<CallMadeIcon style={{paddingLeft:"5px",color:"#58d777", fontSize:"25px"}}/></p>
            <p>Registrations</p>
            </span>
            <span className="lower_card_style_span">
            <p style={{paddingRight:"15px"}}>+{prop.points_upper}<CallReceivedIcon style={{paddingLeft:"5px",color:"#db2a34", fontSize:"25px"}}/></p>
            <p>Registrations</p> 
            </span>      
        </div>
        </div>
        </div>
        </>
    );
}
export default Card_component;
export {Card_component, Lower_card_component};