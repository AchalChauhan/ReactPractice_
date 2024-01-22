import { useState } from 'react'
import axios from 'axios';

function App() {
  const defaultData = {
    first_name: '',
    last_name: '',
    avatar: 'https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg',
  }
  let [userData, setUserState] = useState(defaultData);
  const [buttonState, setButtonClicked] = useState(false);
  const fetchData =  async (btnid) =>{
    try {
      const api_data = await axios.get(`https://reqres.in/api/users/${btnid}`);
      if (!api_data.data) {
        throw new Error('Failed to fetch data');
      }
      // const jsonData = await api_data.json();
      setUserState(api_data.data.data);
      setButtonClicked(true);
    } catch (error) {
      setUserState(defaultData);
      alert('Failed to find Data');
      console.error(error);
    }
  }
  // let img = 'https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg';
  return (
    <>
     <div>
      <button className='btn-1' onClick={()=>{fetchData(1)}} >1</button>
      <button className='btn-1' onClick={()=>{fetchData(2)}}>2</button>
      <button className='btn-1' onClick={()=>{fetchData(3)}}>3</button>
      <button className='btn-1' onClick={()=>{fetchData(100)}}>100</button>

      {setButtonClicked && setUserState && (
      <ul>
        <li className="email">Email:{userData.email}</li>
        <li className="name">Name:{userData.first_name} {userData.last_name}</li>
        <img src={userData.avatar} alt="" className="image" />
      </ul>

        )}
     </div>
    </>
  )
}

export default App
