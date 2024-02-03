import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "../Styles/News.css";
import TopHeadLines from "../assets/TopHeadLines.png";
import "../Styles/newsItem.css";

export default class News extends Component {
  constructor() {
    super();
    this.state ={
      articles : []
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const apiURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=21a9cd7ccddd427abb71f29db04ea7a1";
      const response = await fetch(apiURL);
      const jsonResponse = await response.json();
      if(jsonResponse && jsonResponse.articles){
        this.setState({articles: jsonResponse.articles})
      }else{
        throw new Error('Unable to fetch data');
      }
    } catch (error) {
      alert('Unable to find data');
    }
  };

  render() {
    const {articles} = this.state;
    console.log(articles)
    return (
      <>
        <div className="news-container">
          <div className="topNews-container">
            <img src={TopHeadLines} alt="heading for Top Headlines" />
          </div>
          <div className="grid-container">
            <div className="row">
            {this.state.articles.map((element,idx)=>{
              return <div className="col-md-4" key={idx}>
                <NewsItem  title={element.title} description={element.description} imageURL={element.urlToImage} />
              </div>
            })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
