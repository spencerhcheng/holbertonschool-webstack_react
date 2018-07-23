import React from 'react';
import PropTypes from 'prop-types';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      initValue: this.props.initValue
    }
    this.setValue = this.setValue.bind(this);
    this.timer = this.timer.bind(this);
  }

  componentDidMount() {
    var timerId = setInterval(this.timer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.timerID);
  }

  setValue() {
    this.setState({
      value: this.state.initValue
    });
  }
 
  timer() {
    this.setState({
      value: this.state.value + 1
    });
  }

  render() {
    return (
      <div>
        {this.state.value}
        <button onClick={this.setValue}>New value</button>
      </div>
    );
  }
}
