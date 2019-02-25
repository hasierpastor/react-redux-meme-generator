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
    evt.preventDefaul();
  };
}
