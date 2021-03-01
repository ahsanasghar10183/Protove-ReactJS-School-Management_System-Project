import React from 'react';
import AnnouncementIcon from '@material-ui/icons/Announcement';
const Announcements=()=>
{
    return(
        <>
        <div className="Announcements_div d-inline-block">
            <div className="icon_div">
                <AnnouncementIcon className="announcement_icon"/> <span>Important Announcements! </span> 
            </div>
            <div className="notice_div d-inline-block">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta esse minus temporibus, odio quasi unde ex non aut, ea iure quis labore harum ad deleniti, nemo debitis maxime perspiciatis numquam?</p>
            </div>
        </div>
        </>
    );
   
}
export default Announcements;