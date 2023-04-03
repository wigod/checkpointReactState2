import React, { Component } from 'react';
import './App.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mountTime: null,
      intervalId: null,
      elapsedTime: 0
    };
  }

  componentDidMount() {
    this.setState({ mountTime: new Date() });
    this.setState({ intervalId: setInterval(() => this.tick(), 1000) });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  tick() {
    this.setState({ elapsedTime: new Date() - this.state.mountTime });
  }

  render() {
    return (
      <div>
        <p className='tps'>intervalle de temps depuis le montage du dernier composant: {this.state.elapsedTime} ms</p>
      </div>
    );
  }
}

export default Timer;