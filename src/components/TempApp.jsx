import React, { useEffect, useState } from 'react';

const TempApp = () =>{

    const[city, setCity] = useState("");
    const[search, setSearch] = useState("Mumbai");

    useEffect(()=>{
        const getWeatherData = async() =>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=efe98dacfde9f1370cc56b881dd1377d`;
            let response = await fetch(url);
            response = await response.json();
            console.log(response.main);
            setCity(response.main);
        }

        getWeatherData();
    }, [search]);

  return(
    <>
        <h1 className="heading">Weather Live App</h1>
        <div className="main_box">
            <input type="search" name="search" placeholder="Search by city" onChange={(event)=>{
                setSearch(event.target.value);
            }} value={search} />
            { !city ? 
            <p className="not-found">Data not found</p> 
            :
            <div className="div_city">
                <h1><i className="fas fa-street-view"></i> {search}</h1>
                <h1>{city.temp}°Cel</h1>
                <h3>Min: {city.temp_min}°Cel | Max: {city.temp_max}°Cel</h3>
            </div>
             }
            
        </div>
    </>
  );
}

export default TempApp;