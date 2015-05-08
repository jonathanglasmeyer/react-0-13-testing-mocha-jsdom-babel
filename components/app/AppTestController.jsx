'use strict';

import React, {Component, PropTypes} from 'react';

import App from './App.jsx';

export default class AppTestController extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
    };
  }

  render() {
    return <App foo={this.state.foo} />;
  }

};
