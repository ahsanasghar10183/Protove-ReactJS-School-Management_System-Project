import React from 'react';
const Geolocation_comp=()=>
{
    const success=(position)=>{
        const latitude= position.coords.latitude;
        const longitude= position.coords.longitude;
        const { data, isLoading, errorMessage } = useOpenWeather({
            key: 'bcc1b254390fee790938cbba170fee4c',
            lat: '31.4504',
            lon: '73.1350',
            lang: 'en',
            unit: 'metric', // values are (metric, standard, imperial)
          });
    }
    const error=()=>{
        alert("Location Access Denied By the User!");
    }
    if(!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
    }
    else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
    return(
        <>
         <ReactWeather
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang="en"
            locationLabel="Munich"
            unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
            showForecast
        />
        </>
    );
}
