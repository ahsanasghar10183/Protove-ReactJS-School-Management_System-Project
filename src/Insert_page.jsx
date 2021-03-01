import React from 'react';
import ResponsiveDrawer from './ResponsiveDrawer';
import Dictionary from './Dictionary';
import Analog_clock from './Analog_clock';
import Upload_data from './Upload_data';
import Insert_marks_heading from './Insert_marks_heading';

const Insert_page =()=>{
    return(
        <>
        <ResponsiveDrawer left_component={<Student_marks_insert_component/>}/>
        </>
    );
}

const Student_marks_insert_component=()=>{
    return(
        <>
        <div className="row">
            <div className="col-12 col-sm-12 col-md-7 col-lg-9">
              <Dictionary/>
            </div>
            <div className="col-12 col-sm-12 col-md-5 col-lg-3">
                <Analog_clock/>
            </div>
            <div className="col-12 mt-3">
                <Insert_marks_heading/>
            </div>

            <div className="col-12 mt-3">
                <Upload_data/>
            </div>
            
        </div>

        </>
  );
}
export default Insert_page;