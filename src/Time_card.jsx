import React from 'react';
const Time_card =()=>
{
    const card_styles={
        color:"lightgray",
        margin:"2px",
        fontSize:"14px",
        padding:"2px",
        paddingBottom:"0px"
    }
    return(
        <>
        <p style={{fontSize:"16px",padding:"0px", paddingBottom:"5px",margin:"0px"}}>Test Performance</p>
        <p style={card_styles}>02/04/2010</p>
        <p style={card_styles}>$$20.450</p>
        <p style={card_styles}>234252345435</p>
        </>
    );
}
export default Time_card;