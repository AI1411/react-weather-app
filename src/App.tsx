import React from 'react';
import './App.css';
import Weather from "./Weather";

function App() {
    const cities = [
        {
            city_name: "Mitaka",
            color_name: "blue",
        },
        {
            city_name: "London",
            color_name: "yellow",
        },
        {
            city_name: "Paris",
            color_name: "green",
        },
        {
            city_name: "Los Angeles",
            color_name: "red",
        },
        {
            city_name: "Beijing",
            color_name: "indigo",
        },
        {
            city_name: "Trin",
            color_name: "pink",
        },
    ]
    return (
        <div className="min-h-screen flex justify-center items-center flex-wrap">
            {
                cities.map((city,index) =>
                    <Weather
                        key={index}
                        city_name={city.city_name}
                        color_name={city.color_name}
                    />)
            }
        </div>
    );
}

export default App;
