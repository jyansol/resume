import React, { Component } from 'react';
import grim from '../images/grim.png';
import baseball from '../images/baseball.png';
import baeminchan from '../images/baeminchan.png';
import project from './_project.scss';
import Modal from './Modal.js';

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    return (
      <>
        <div class="Project">
          <h1 className="title">Project</h1>
          <div className="Project__img">
            <figure class="effect-bubba">
              <img src={grim} alt="" />
              <figcaption>
                <h2>
                  Fresh <span>Bubba</span>
                </h2>
                <p>Bubba likes to appear out of thin air.</p>
                <a href="#">View more</a>
              </figcaption>
            </figure>

            <Modal isOpen={this.state.isModalOpen} onClose={this.closeModal} />
            {/* <a onClick={this.openModal}>Open the modal</a>
            <img src={grim} alt="" />
            <img src={baseball} alt="" /> */}
          </div>
        </div>
      </>
    );
  }
}
