import React, { Component } from 'react';
import LightBox from './LightBox';
import album from './props';
class App extends Component {

  render() {
    return (
      <LightBox {...album}/>
    );
  }
}

export default App;
