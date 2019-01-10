import React, { Component } from 'react';
import Who from './Who';
import Skill from './Skill';
import Project from './Project';
import common from './components/_common.scss';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleData = () => {};

  render() {
    return (
      <>
        <Who />
        <Skill />
        <Project />
      </>
    );
  }
}
