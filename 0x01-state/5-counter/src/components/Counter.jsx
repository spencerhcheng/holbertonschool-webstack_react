import React from 'react';
import PropTypes from 'prop-types';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.initValue };
    this.setValue = this.setValue.bind(this);
  }

  setValue() {
    this.setState({ value: this.state.value + 1 });
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
