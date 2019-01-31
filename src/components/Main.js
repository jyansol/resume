import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Who from './Who';
import Skill from './Skill';
import Project from './Project';
import Linked from './Linked';
import Modal from './Modal';

import common from './_common.scss';
import background from '../images/background.png';

export default class Main extends Component {
  render() {
    return (
      <>
        <div className="default-bg">
          <Who />
          <Skill />
        </div>
        <Project />
        <Linked />
      </>
    );
  }
}
