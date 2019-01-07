import React, { Component } from 'react';

export default class Main extends Component {
  // defaultProps
  static defaultProps = {
    products: [],
  };
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleData = () => {};

  render() {
    return (
      <div>
        <h1>This is my resume</h1>
      </div>
    );
  }
}
