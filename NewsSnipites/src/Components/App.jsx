import React, { Component } from 'react'
import NavBar from './NavBar'
import NewsItem from './NewsItem.jsx'
import News from './News.jsx'
export default class App extends Component {


  render() {
    return (
      <div>
        <NavBar/>
        <News />
      </div>
    )
  }
}

