import React from 'react';
import AnalogueClock from 'react-analogue-clock';
const clockOptions = {
    baseColor: '#1d1f3e',
    borderColor: 'lightgray',
    borderWidth: 5,
    centerColor: '#fd5f00',
    handColors: {
        hour: '#2477ff',
        minute: '#58d777',
        second: '#fd5f00',
    },
    notchColor: 'gray',
    numbersColor: 'gray',
    showNumbers: true,
    size: 200
}
 
const Analog_clock=()=>{
    return(
        <>
            <AnalogueClock {...clockOptions} />
        </>
    );
}
export default Analog_clock;