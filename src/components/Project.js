import React, { Component } from 'react';
import grim from '../images/grim.png';
import baseball from '../images/baseball.png';
import baeminchan from '../images/baeminchan.png';

export default class Project extends Component {
  render() {
    return (
      <>
        <h1>Project</h1>
        <div className="Project">
          <img src={baeminchan} alt="" />
          <img src={grim} alt="" />
          <img src={baseball} alt="" />
        </div>
      </>
    );
  }
}
