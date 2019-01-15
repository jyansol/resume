import React, { Component } from 'react';
import skill from './_skill.scss';

export default class Skill extends Component {
  // defaultProps
  static defaultProps = {
    frontend: ['JavaScript ES6', 'React', 'jQuery', 'SCSS', 'HTML5'],
    design: ['Photoshop', 'Illustrator'],
    comunity: ['Github', 'slack'],
    tutorial: ['JAVA', 'Nodejs', 'Android Studio'],
  };

  render() {
    const { frontend, design, comunity, tutorial } = this.props;
    const text = `
        this.state = {\n
          role: ['Front-end-Developer'],\n
          stack: [{\n
            frontEnd: ['JavaScript ES6', 'React', 'jQuery', 'SCSS', 'HTML5'],\n
            design: ['Photoshop', 'Illustrator'],\n
            comunity: ['Github', 'slack'],\n
            tutorial: ['JAVA', 'Nodejs', 'Android Studio'],\n
          }]\n
        }\n
      `;
    return (
      <>
        <h1 className="Skill_title">SKILL</h1>
        <div className="Skill_code">
          {text.split('\n').map((t) => (
            <span>
              {t}
              <br />
            </span>
          ))}
        </div>

        {/* <div className="Skill">
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
            <h2>Comunity</h2>
            {comunity.map((i) => (
              <li>{i}</li>
            ))}
          </div>
          <div className="Skill_div tutorial">
            <h2>Tutorial</h2>
            {tutorial.map((i) => (
              <li>{i}</li>
            ))}
          </div>
        </div> */}
      </>
    );
  }
}
