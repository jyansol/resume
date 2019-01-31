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
          <ul className="Linked__ul">
            <li>
              <span className="span">EMAIL ADDRESS</span>
              <br />
              <a href="mailto:hahn0406@gmail.com">hahn0406@gmail.com</a>
            </li>
            <li>
              <span className="span">PHONE NUMBER</span>
              <br />
              <a href="tel:010-3199-0935">010 3199 0935</a>
            </li>
            <div className="Linked__div">
              <li>
                <a href="https://github.com/jyansol" target="_blank">
                  <span className="span Linked__a">Github</span>
                </a>
              </li>
              <li>
                <a href="https://velog.io/@zansol" target="_blank">
                  <span className="span Linked__a">VELOG</span>
                </a>
              </li>
              <li>
                <a href="https://codepen.io/jyansol/" target="_blank">
                  <span className="span Linked__a">CODEPEN</span>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </>
    );
  }
}
