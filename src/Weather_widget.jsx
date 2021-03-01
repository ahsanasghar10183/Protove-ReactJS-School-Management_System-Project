import React from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import {useState} from 'react';
const Weather_widget=()=>
{
  // const [latitude_v, setLatitude]= useState("");
  // const [longitude_v, setLongitude]= useState("");
   
    // const error=()=>{
    //     alert("Location Access Denied By the User!");
    // }
    // if(!navigator.geolocation) {
    //   alert('Geolocation is not supported by your browser');
    // }
    // else {
    //   const success=(position)=>{
    //     console.log(position.coords.latitude);
    //     setLongitude(position.coords.longitude);
    //  }
    //   navigator.geolocation.watchPosition(success, error);
    // }
    const { data, isLoading, errorMessage } = useOpenWeather({
      key: 'bcc1b254390fee790938cbba170fee4c',
      lat: 	31.418715,
      lon: 73.079109,
      lang: 'en',
      unit: 'metric', // values are (metric, standard, imperial)
    });
    return(
        <>
         <ReactWeather
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang="en"
            locationLabel="Faisalabad"
            unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
            showForecast= {true}
        />

        </>
    );
}
export default Weather_widget;