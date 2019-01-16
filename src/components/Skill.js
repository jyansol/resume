import React, { Component } from 'react';
import skill from './_skill.scss';

export default class Skill extends Component {
  // defaultProps
  static defaultProps = {
    // obj: {
    //   role: ['Front-end-Developer'],
    //   stack: [
    //     {
    //       frontEnd: ['JavaScript ES6', 'React', 'jQuery', 'SCSS', 'HTML5'],
    //     },
    //     { design: ['Photoshop', 'Illustrator'] },
    //     { comunity: ['Github', 'slack'] },
    //     { tutorial: ['JAVA', 'Nodejs', 'Android Studio'] },
    //   ],
    // },
    line: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    frontEnd: ['JavaScript ES6', 'React', 'jQuery', 'SCSS', 'HTML5'],
  };

  render() {
    const { obj, frontEnd, line } = this.props;

    return (
      <>
        {/* <div className="Skill_code">
          {text.split('\n').map((t) => (
            <span className="Skill_text">
              {t}
              <br />
            </span>
          ))}
        </div> */}
        {/* 줄번호 출력 */}
        <div className="Skill">
          <h1 className="Skill__title title">SKILL</h1>
          <div class="Skill__div">
            {/* 코드라인 */}
            <div className="Skill__line">
              {line.map((l) => (
                <li>{l}</li>
              ))}
            </div>
            {/* 코드출력 */}

            <div className="Skill__code_first">
              <span className="Skill__keys">stack :</span>[
              {frontEnd.map((k) => (
                <li className="Skill__list">'{k}'</li>
              ))}
              ],
            </div>
          </div>
        </div>
      </>
    );
  }
}
