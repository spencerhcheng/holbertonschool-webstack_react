import React from 'react';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      done: !prevState.done
    }));
  }

  render() {
    return (
      <li className= {this.state.done ? "done" : null}
      onClick={this.handleClick}>
        { this.props.value }
      </li>
    );
  }
}
