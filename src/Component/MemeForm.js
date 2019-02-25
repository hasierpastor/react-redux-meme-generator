import React, { Component } from 'react';
import uuid from 'uuid/v4';

class AddMemeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      topText: '',
      bottomText: ''
    };
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.addMeme(this.state);
    this.setState({
      image: '',
      topText: '',
      bottomText: '',
      id: uuid()
    });
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="image">Meme Url:</label>
        <input
          id="image"
          name="image"
          value={this.state.image}
          onChange={this.handleChange}
        />

        <label htmlFor="topText">Top Text:</label>
        <input
          id="topText"
          name="topText"
          value={this.state.topText}
          onChange={this.handleChange}
        />

        <label htmlFor="bottomText">Bottom Text:</label>
        <input
          id="bottomText"
          name="bottomText"
          value={this.state.bottomText}
          onChange={this.handleChange}
        />

        <button>Add a Meme!</button>
      </form>
    );
  }
}

export default AddMemeForm;
