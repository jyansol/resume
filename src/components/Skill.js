import React, { Component } from 'react';
import skill from './_skill.scss';

export default class Skill extends Component {
  // defaultProps
  static defaultProps = {
    frontend: ['JavaScript ES6', 'React', 'jQuery', 'SCSS', 'HTML5'],
    design: ['Photoshop', 'Illustrator'],
    comunity: ['Github', 'slack'],
  };

  render() {
    const { frontend, design, comunity } = this.props;
    return (
      <>
        <h1 className="Skill_title">SKILL</h1>
        <div className="Skill">
          <div className="Skill_div frontend">
            <h2>Front-end</h2>
            {frontend.map((i) => (
              <li>{i}</li>
            ))}
          </div>
          <div className="Skill_div design">
            <h2>Design</h2>
            {design.map((i) => (
              <li>{i}</li>
            ))}
          </div>
          <div className="Skill_div comunity">
            <h2>comunity</h2>
            {comunity.map((i) => (
              <li>{i}</li>
            ))}
          </div>
        </div>
      </>
    );
  }
}
