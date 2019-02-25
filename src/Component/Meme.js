import React, { Component } from 'react';
import './Meme.css';

class Meme extends Component {
  removeMeme = () => {
    this.props.removeMeme(this.props.id);
  };

  render() {
    return (
      <div className="memeContainer">
        <div className="textBlock">
          <h1 className="header">{this.props.topText}</h1>
        </div>
        <img src={`${this.props.image}`} alt="meme" />
        <div className="textBlock">
          <h1 className="footer">{this.props.bottomText}</h1>
        </div>
        <button className="removeButton" onClick={this.removeMeme}>
          Remove Meme
        </button>
      </div>
    );
  }
}

export default Meme;
