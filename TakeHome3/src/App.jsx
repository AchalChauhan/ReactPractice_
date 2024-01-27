import { useState } from "react";
import axios from "axios";

function Form({ onSubmit }) {
  const [isDocSelected, setIsDocSelected] = useState(false);
  const [apiRequest, setApiRequest] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    doctor: "Select a doctor",
    where: "",
    date: "",
  });

  const handleDropDownChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      doctor: value,
    }));
    setIsDocSelected(value !== "Select a doctor");
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

  const handelCancelAppointment= (e) =>{
    setApiRequest(null);
    setFormData({
      firstName: "",
    lastName: "",
    email: "",
    doctor: "Select a doctor",
    where: "",
    date: "",
    })
    setIsDocSelected(false);
  }


  const handleSubmit = async () => {
    setApiRequest('IP');
    console.log("Submitting form data:", formData);
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    axios
      .post(apiUrl, formData)
      .then((response) => {
        setApiRequest('DONE');
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
    <div style={apiRequest == 'DONE' ? { display: 'none' } : { display: 'block' }} >
      <h1>Book a session</h1>
      <p>Fill in the form bellow to book a virtual session with your doctor</p>
    </div>
    <div id="wholeForm"  style={apiRequest == null ? { display: 'block' } : { display: 'none' }}>

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
      <select
        name="doctor"
        id="doc-names"
        value={formData.doctor}
        onChange={handleDropDownChange}
        >
        <option value="Select a doctor">Select your doctor</option>
        <option value="jhon">Dr Jhon Hopkins</option>
        <option value="abc">Dr abc</option>
        <option value="def">Dr def</option>
        <option value="geh">Dr geh</option>
        <option value="xyz">Dr xyz</option>
      </select>

      {isDocSelected && (
        <>
          <h4>Where?</h4>
          <label htmlFor="where">
            <input
              type="radio"
              name="where"
              value="Google Meet"
              checked={formData.where === "Google Meet"}
              onChange={handleRadioChange}
              />
            Google Meet
          </label>
          <br />
          <label htmlFor="where">
            <input
              type="radio"
              name="where"
              value="phone"
              checked={formData.where === "phone"}
              onChange={handleRadioChange}
              />
            phone
          </label>
          <br />
          <h4>When?</h4>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            />
          <br />
          <button onClick={handleSubmit}>Confirm Booking</button>
        </>
      )}
      </div>

      <div id='ip' style={apiRequest == 'IP' ? { display: 'block' } : { display: 'none' }}>
        <h1>Scheduling the appointment....</h1>
      </div>

      <div id= 'done' style={apiRequest == "DONE" ? { display: 'block' } : { display: 'none' }}>
        <h1>Appointment booked succesfully</h1>
        <button onClick={handelCancelAppointment}>Cancel Apointment</button>
      </div>
    </>
  );
}

function whenWhere() {
  return <></>;
}

export default Form;
