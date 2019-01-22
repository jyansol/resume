import React, { Component } from 'react';

export default class Modal extends Component {
  render() {
    const { isOpen, onClose } = this.props;
    return (
      <>
        <div className={isOpen ? 'modal modal--is-open' : 'modal'}>
          <button onClick={onClose}>close</button>
          <p>Hello! I am a modal.</p>
        </div>
      </>
    );
  }
}
