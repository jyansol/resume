import React, { Component } from 'react';
import grim from '../images/grim.png';
import baseball from '../images/baseball.png';
import baeminchan from '../images/baeminchan.png';
import project from './_project.scss';

export default class Project extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      toggle: false,
    };
  }

  render() {
    const display = {
      display: 'block',
    };
    const hide = {
      display: 'none',
    };
    return (
      <>
        <div class="Project">
          <h1 className="title">Project</h1>
          <div className="Project__img">
            <img src={baeminchan} alt="" />
            <img src={grim} alt="" />
            <img src={baseball} alt="" />
          </div>
        </div>
      </>
    );
  }
}
