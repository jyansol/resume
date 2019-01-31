import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import project from './_project.scss';

import grim from '../images/grim1.png';
import baseball from '../images/ball1.png';
import baeminchan from '../images/baeminchan.png';
import Modal from './Modal.js';

export default class Project extends Component {
  static defaultProps = {
    img: [baeminchan, grim, baseball],
  };

  render() {
    const { img } = this.props;
    return (
      <>
        <div className="Project">
          <h1 className="title title-effect">Project</h1>
          <div className="Project__img">
            {img.map((i, index) => (
              <>
                <div className="holder">
                  <Link to={`/detailview/${index}`}>
                    <img src={i} alt="projectImage" />
                  </Link>
                </div>
              </>
            ))}
          </div>
        </div>
      </>
    );
  }
}
