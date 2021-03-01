import React from 'react';
const Text_card =()=>{
const card_styles={
    margin:"4px",
    color:"$lightgray",
    marginLeft:"0px"
}
    return(
        <>
        <p style={{card_styles, marginBottom:"2px", fontSize:"14px"}}>Test Performance</p>
        <h4 style={card_styles}>Quantity</h4>
        <p style={{fontSize:"14px", color:"lightgray", margin:"5px"}}><span>300</span><span>250</span><span>50</span></p>
        <p style={{fontSize:"14px", color:"lightgray", margin:"5px"}}><span>Total</span><span>Pass</span><span>Fail</span></p>

        </>
    );
}
export default Text_card;