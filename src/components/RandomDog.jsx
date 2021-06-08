import React, { Component } from 'react';
import ButtonDogo from './ButtonDogo';
import GenerateDog from './GenerateDog';

export default class RandomDog extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      dogObj: {},
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const { dogObj } = nextState;
    if (dogObj.message && dogObj.message.includes('terrier')) {
      // console.log(dogObj.message);
      return false;
    }
    // console.log(dogObj.message);
    localStorage.setItem('link', dogObj.message);
    return true;
  }

  componentDidUpdate(_prevProps, prevState) {
    const { dogObj } = prevState;
    const { loading } = this.state;
    if (dogObj.message && loading === false) {
      const splited = dogObj.message.split('/');
      alert(splited[4]);
    }
  }

  handleClick() {
    this.fetchApi();
  }

  fetchApi() {
    this.setState({ loading: true }, () => {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((data) => this.setState({
          loading: false,
          dogObj: data,
        }));
    });
  }

  render() {
    const loadingText = <div>Loading! Wait a second...</div>;
    const { loading, dogObj } = this.state;
    // console.log(dogObj);
    return (
      <div>
        {loading ? loadingText : <GenerateDog message={ dogObj.message } />}
        <ButtonDogo click={ this.handleClick } />
      </div>
    );
  }
}
