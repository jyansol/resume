import React, { Component } from 'react';
import modal from './_modal.scss';

export default class Modal extends Component {
  render() {
    const { isOpen, onClose } = this.props;
    return (
      <>
        {/* <div className={isOpen ? 'modal modal--is-open' : 'modal'}>
          <button onClick={onClose}>close</button>
          <p>Hello! I am a modal.</p>
        </div> */}
        <h1>디테일뷰</h1>
      </>
    );
  }
}
