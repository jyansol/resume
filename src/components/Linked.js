import React, { Component } from 'react';
import linked from './_Linked.scss';

export default class Project extends Component {
  static defaultProps = {
    Linked: ['Github', 'Linkedin'],
    phone: '01031990935',
    email: 'hahn0406@gmail.com',
  };

  render() {
    const { Linked, phone, email } = this.props;
    return (
      <>
        <div className="Linked">
          <h1 className="title title-effect">Contact</h1>
          <ul>
            <li>
              <a href="#">이메일</a>
            </li>
            <li>
              <a href="#">연락처</a>
            </li>
            <li>
              <a href="#">깃헙</a>
            </li>
            <li>
              <a href="#">티스토리</a>
            </li>
            <li>
              <a href="#">코드펜</a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
