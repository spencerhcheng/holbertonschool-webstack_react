import React from 'react';

export default class Title extends React.Component {
  render() {
    return (
      <h1>Welcome to {this.props.name}</h1>
    );
  }
}
