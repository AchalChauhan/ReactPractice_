import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewsItem extends Component {
  static propTypes = {};

  render() {
    let {title, description, imageURL} = this.props;
    return (
      <>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
             {description}
            </p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
