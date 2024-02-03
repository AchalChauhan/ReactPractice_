import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import axios from "axios";

function App() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [badRequestState, setBadRequestState] = useState(true);
  const API_KEY = "fc06e9c9713e488fa11203829240102";
  // const URL = ``;

  const handelLocation = (e) => {
    if(e.target.value == ''){
      setBadRequestState(false)
    }
    setLocation(e.target.value);
    fetchData();
  };

  // const fetchData = async () => {
  //   if(location == '') return;
  //   console.log(location);
  //   try {
  //     let response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`);
  //     console.log(response);
  //     if (!response.ok) {
  //       setBadRequestState(true)
  //       throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
  //     }
  //     setWeatherData(data);
  //     setBadRequestState(false)
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // };

  const fetchData = async () => {
    if (location === "") return;
    console.log(location);
  
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`);
      console.log(response);
  
      if (response.status !== 200) {
        setBadRequestState(true);
        throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
      }
  
      setWeatherData(response.data);
      setBadRequestState(false);
    } catch (e) {
      setBadRequestState(true);
      console.error(e.message);
    }
  };
  
  useEffect( ()=>{
    // async function onLoad(){
    //   fetchData();
    // }
    // onLoad();
  },[])

  return (
    <>
      <div className="heading-container">
        <div className="heading">Weather App</div>
      </div>
      <div className="input-container">
        <p>
          <input
            placeholder=" "
            name="location"
            value={location}
            onChange={handelLocation}
          />
          <label>Placeholder Text</label>
        </p>
        {!badRequestState && Object.keys(weatherData).length > 0 ?  <Card {...weatherData} /> : <div className='error'>No matching loaction found.</div> }
      </div>
      <div className="card-component"></div>
    </>
  );
}

export default App;
