import React, { Component } from 'react';
import grim from '../images/grim.png';
import baseball from '../images/baseball.png';
import baeminchan from '../images/baeminchan.png';
import project from './_project.scss';
import { Link } from 'react-router-dom';

export default class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: false,
    };
  }

  render() {
    return (
      <>
        <div class="Project">
          <h1 className="title">Project</h1>
          <div className="Project__img">
            <Link src={baeminchan} alt="" />
            <img src={grim} alt="" />
            <img src={baseball} alt="" />
          </div>
        </div>
      </>
    );
  }
}
