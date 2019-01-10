import React, { Component } from 'react';

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
        {Linked}
        <a href="tel:01031990935">{phone}</a>
        {email}
      </>
    );
  }
}
