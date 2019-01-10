import React, { Component } from 'react';

export default class Skill extends Component {
  // defaultProps
  static defaultProps = {
    frontend: ['JavaScript', 'React', 'jQuery', 'SCSS', 'HTML5'],
    design: ['Photoshop', 'Illustrator'],
    comunity: ['Github', 'slack'],
  };

  render() {
    const { frontend, design, comunity } = this.props;
    return (
      <>
        <h1>SKILL</h1>
        <div className="frontend">
          <h1>Front-end</h1>
          {frontend.map((i) => (
            <li>{i}</li>
          ))}
        </div>
        <div className="design">
          <h1>Design</h1>
          {design.map((i) => (
            <li>{i}</li>
          ))}
        </div>
        <div className="comunity">
          <h1>comunity</h1>
          {comunity.map((i) => (
            <li>{i}</li>
          ))}
        </div>
      </>
    );
  }
}
