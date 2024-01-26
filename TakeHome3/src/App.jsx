import { useState } from 'react'
import axios from 'axios';

function Form({ onSubmit }) {
  const [isDocSelected, setIsDocSelected] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    doctor: 'Select a doctor',
    where: '',
    date: '',
  });

  const handleDropDownChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      doctor: value,
    }));
    setIsDocSelected(value !== 'Select a doctor');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

// const handleSubmit = async (formData) => {
//   console.log(formData);
//   try {
//     const post = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);

//     if (!post.data) {
//       throw new Error("Post request failed");
//     }
//     console.log(post);
//   } catch (error) {
//     alert('Failed to make a post request');
//   }
//   // onSubmit(formData);
// };

const handleSubmit = async () => {
  console.log('Submitting form data:', formData);
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    axios.post(apiUrl, formData)
    .then(response => {
      console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
};


  return (
    <>
      <h1>Book a session</h1>
      <p>Fill in the form bellow to book a virtual session with your doctor</p>
      <h5>Basic Info</h5>

<label htmlFor="First-Name">First Name:</label>
<input
  type="text"
  name="firstName"
  value={formData.firstName}
  id="fName"
  onChange={handleInputChange} // Add the onChange handler
/>

<br />
<label htmlFor="Last-Name">Last Name:</label>
<input
  type="text"
  name="lastName"
  value={formData.lastName}
  id="lName"
  onChange={handleInputChange} // Add the onChange handler
/>

<br />
<label htmlFor="email">Email:</label>
<input
  type="email"
  name="email"
  value={formData.email}
  id="email"
  onChange={handleInputChange} // Add the onChange handler
/>

      <br />
      <h4>Doctor</h4>
      <select name="doctor" id="doc-names" value={formData.doctor} onChange={handleDropDownChange}>
        <option value="Select a doctor">Select your doctor</option>
        <option value="jhon">Dr Jhon Hopkins</option>
        <option value="abc">Dr abc</option>
        <option value="def">Dr def</option>
        <option value="geh">Dr geh</option>
        <option value="xyz">Dr xyz</option>
      </select>

      {isDocSelected &&
        <>
          <h4>Where?</h4>
          <label htmlFor="where">
            <input type="radio" name='where' value='Google Meet' checked={formData.where === 'Google Meet'} onChange={handleRadioChange} />
            Google Meet
          </label>
          <br />
          <label htmlFor="where">
            <input type="radio" name='where' value='phone' checked={formData.where === 'phone'} onChange={handleRadioChange} />
            phone
          </label>
          <br />
          <h4>When?</h4>
          <input type="date" name='date' value={formData.date} onChange={handleInputChange} />
          <br />
          <button onClick={handleSubmit}>Confirm Booking</button>
        </>

      }
    </>
  )
}

function whenWhere() {
  return (
    <>

    </>
  )
}

export default Form
