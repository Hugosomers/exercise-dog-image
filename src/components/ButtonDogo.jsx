import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ButtonDogo extends Component {
  render() {
    const { click } = this.props;
    return (
      <div>
        <button type="button" onClick={ click }>DOGO</button>
      </div>
    );
  }
}

ButtonDogo.propTypes = {
  click: PropTypes.func.isRequired,
};
