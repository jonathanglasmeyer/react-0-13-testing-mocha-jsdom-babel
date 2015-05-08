'use strict';

import React, {Component, PropTypes} from 'react';

export default class App extends Component {

  static propTypes = {
    foo: PropTypes.string.isRequired
  }

  render() {

    return <p>
      {this.props.foo}
    </p>;
  }

};
