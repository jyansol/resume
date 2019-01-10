import React, { Component } from 'react';
import Who from './Who';
import Skill from './Skill';
import Project from './Project';
import Linked from './Linked';

import common from './_common.scss';
import background from '../images/background.png';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Who />
        <Skill />
        <Project />
        <Linked />
      </>
    );
  }
}
