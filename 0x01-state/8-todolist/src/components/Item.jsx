import React from 'react';
import ReactDOM from 'react-dom';

export default class Item extends React.Component {
  render() {
    return (
      <li>
        { this.props.value }
      </li>
    );
  }
}
