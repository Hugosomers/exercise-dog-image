import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RandomDog.css';

export default class GenerateDog extends Component {
  render() {
    const { message } = this.props;
    return (
      <div>
        <img src={ message } alt="Imagem de cachorro" className="dogsImg" />
      </div>
    );
  }
}

GenerateDog.propTypes = {
  message: PropTypes.string.isRequired,
};
