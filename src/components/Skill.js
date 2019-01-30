import React, { Component } from 'react';
import skill from './_skill.scss';

export default class Skill extends Component {
  // defaultProps
  static defaultProps = {
    entityLeft: '{',
    entityRight: '}',
    line: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    role: ['Front-end-Developer'],
    frontEnd: ['JavaScript ES6', 'React', 'jQuery', 'SCSS', 'HTML5'],
    design: ['Photoshop', 'Illustrator'],
    comunity: ['Github', 'slack'],
    tutorial: ['JAVA', 'Nodejs', 'Android Studio'],
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { entityRight, entityLeft, line, role, frontEnd, design, comunity, tutorial } = this.props;

    return (
      <>
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
            <div class="Skill__code">
              <span className="Skill__comments">
                {entityLeft}
                <span className="Skill__comments-text">/* Who am I */</span>
                {entityRight}
              </span>
              <div className="Skill__code_first">
                <span className="Skill__blue">this</span>.<span className="Skill__skyblue">state</span> =
                <span className="Skill__skyblue">{entityLeft}</span>
              </div>
              <div className="Skill__code_second padding">
                <span className="Skill__skyblue">role:</span>['<span className="Skill__list">{role}</span>'],
              </div>
              <div className="Skill__code_third padding">
                <span className="Skill__skyblue">frontEnd :</span>[
                {frontEnd.map((k) => (
                  <li className="Skill__list">'{k}'</li>
                ))}
                ],
              </div>
              <div className="Skill__code_fourth padding">
                <span className="Skill__skyblue">design :</span>[
                {design.map((k) => (
                  <li className="Skill__list">'{k}'</li>
                ))}
                ],
              </div>
              <div className="Skill__code_fifth padding">
                <span className="Skill__skyblue">comunity :</span>[
                {comunity.map((k) => (
                  <li className="Skill__list">'{k}'</li>
                ))}
                ],
              </div>
              <div className="Skill__code_fifth padding">
                <span className="Skill__skyblue">tutorial :</span>[
                {tutorial.map((k) => (
                  <li className="Skill__list">'{k}'</li>
                ))}
                ],
              </div>
              <span className="Skill__skyblue">{entityRight}</span>
            </div>
          </div>
        </div>
        <div className="Skill__underbar">
          <ol className="Skill__ol">
            <li>UTF-8</li>
            <li>JavaScript React</li>
            <li>ESLint</li>
            <li>smile</li>
            <li>bell</li>
          </ol>
        </div>
      </>
    );
  }
}
