'use strict';

import React, {Component, PropTypes} from 'react';

const styles = {

}

export default class App extends Component {

  static propTypes = {
    foo: PropTypes.string.isRequired
  }

  render() {

    return <div style={styles}>
      {this.props.foo}
    </div>;
  }

};

module.exports = App;
