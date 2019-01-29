import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import modal from './_modal.scss';

export default class Modal extends Component {
  render() {
    const { img } = this.props;
    console.log(img);
    return (
      <>
        <h1>프로젝트</h1>
      </>
    );
  }
}
