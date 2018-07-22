import React from 'react';
import PropTypes from 'prop-types';

export default class Counter extends React.Component {
  render() {
    return (
      <div>
        {this.props.value ? this.props.value : 0}
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired
};

Counter.defaultProps = {
  value: 0
};
