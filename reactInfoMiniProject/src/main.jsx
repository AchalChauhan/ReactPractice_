import React from 'react'
import ReactDOM from 'react-dom/client'
import MainContent from './compoents/MainContent.jsx'
import Header from './compoents/Header.jsx'
import Footer from './compoents/Footer.jsx'
import './Styles/index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <MainContent />
    <Footer />
  </React.StrictMode>,
)
