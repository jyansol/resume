import React, { Component } from 'react';

export default class Project extends Component {
  static defaultProps = {
    Linked: ['Github', 'Linkedin'],
    phone: '01031990935',
    email: 'hahn0406@gmail.com',
  };

  render() {
    const { Linked } = this.props;
    return <>{Linked}</>;
  }
}
