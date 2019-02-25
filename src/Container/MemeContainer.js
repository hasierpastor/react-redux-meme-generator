import React, { Component } from 'react';
import { connect } from 'react-redux';
import Meme from '../Component/Meme';
import MemeForm from '../Component/MemeForm';
import { add, remove } from '../actionCreators';

class MemeContainer extends Component {
  render() {
    let memeList = this.props.memes.map(meme => (
      <Meme
        image={meme.image}
        topText={meme.topText}
        bottomText={meme.bottomText}
        id={meme.id}
        removeMeme={this.props.remove}
      />
    ));
    return (
      <div>
        <MemeForm addMeme={this.props.add} />
        {memeList}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    memes: reduxState.memes
  };
}

const connectToReduxStore = connect(
  mapStateToProps,
  { add, remove }
);

export default connectToReduxStore(MemeContainer);
