import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';
const Footer= ()=>
{
    return(
        <>
        <div className="footer">
            <p className="text-center font-normal">All Rights Reserved <CopyrightIcon fontSize="Small"/>, Developed By: <span style={{color: "green"}}>Ahsan Asghar</span></p>
        </div>
        </>
    );

}
export default Footer;