import { useState , useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [selectedBreed, setSelectedValue] = useState('Random');
  const [dogImage, setDogImage] = useState('');

  const handelDropDownChange = (e) =>{
    setSelectedValue(e.target.value);
  }

  const handleNextButtonClick = () => {
    fetchDogImage();
  };
  const fetchDogImage = async () => {
    let apiURL = 'https://dog.ceo/api/breeds/image/random';

    if (selectedBreed !== 'Random') {
      apiURL = `https://dog.ceo/api/breed/${selectedBreed.toLowerCase()}/images/random`;
    }

    try {
      const response = await axios.get(apiURL);

      if (!response.data) {
        throw new Error("Failed to fetch data");
      }
      const imageUrl = response.data.message;
      setDogImage(imageUrl);
    } catch (error) {
      alert("Failed to find Data");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDogImage();
  }, [selectedBreed])
   return (
    <>
      <span>Select a breed</span>
      <select name="dog-breads" id="dog-breeds" value={selectedBreed || "Random"} onChange={handelDropDownChange}> 
        <option value="Random">Random</option> 
        <option value="Beagle">Beagle</option> 
        <option value="Boxer">Boxer</option> 
        <option value="Dalmatian">Dalmatian</option> 
        <option value="Husky">Husky</option> 
    </select>
    <br />
    <img id='image' src={dogImage} alt="image not found" />
    <br />
    <button id='next-btn' onClick={handleNextButtonClick}>next</button>
    </>
  )
}

export default App
