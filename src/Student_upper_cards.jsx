import React from 'react';
import './css/Students_dashboard_style.scss';
const Student_upper_cards =(prop)=>
{
    return(
        <>
        <div className="card students_upper_cards " >
            <div className="card-body">
                <div className="card-icon d-inline-block">
                    <p className="student-icons">{prop.icon}</p> 
                </div>
                <div className="text_card d-inline-block">
                    <p>6 <br/>
                    {prop.card_text}</p>
                </div>
            </div>
         </div>
        </>
    );
}
export default Student_upper_cards;