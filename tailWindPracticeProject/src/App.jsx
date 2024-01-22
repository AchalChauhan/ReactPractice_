import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Card from'./Components/CardComponent'
const fetchUserData = async ()=>{
  try {
    const userData = await fetch('https://api.github.com/users/{userName}}')
    
  } catch (error) {
    
  }
} 

function App() {
  let myObj = {
    userName: "achal_ch",
    age: 25,
    work: "devlopment",
    LinkedInProfile : "https://www.linkedin.com/in/achalchauhan/"
  };
  return (
    <>
    <h1 className='bg-green-500 text-black rounded p-4 rounded-xl'>Tailwind test</h1>
    <Card channel="blabla" someObej = {myObj}></Card>
    </>
  )
}

export default App
