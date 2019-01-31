import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Linked from './Linked';
import Back from './Back';

import chan1 from '../images/chan1.png';
import chan2 from '../images/chan2.png';
import chan3 from '../images/chan3.png';
import chan4 from '../images/chan4.png';
import chan5 from '../images/chan5.png';

import grim1 from '../images/grim1.png';
import grim2 from '../images/grim2.png';
import grim3 from '../images/grim3.png';

import Baseball1 from '../images/ball1.png';
import Baseball2 from '../images/ball2.png';
import Baseball3 from '../images/ball3.png';

import modal from './_modal.scss';

class Baeminchan extends Component {
  render() {
    return (
      <div className="Baeminchan">
        <div className="Baeminchan__bg">
          <div className="Baeminchan__info">
            <h1 className="Baeminchan__title">Baeminchan Copy</h1>
            <span className="Baeminchan__role">
              <strong>ROLE :</strong> Front-end, SEO, Design /
            </span>
            <span className="Baeminchan__date"> 2018.12.03 ~ 2018.12.20</span>
          </div>
        </div>
        <article className="Baeminchan__article">
          <h2 className="Baeminchan__h2">Experience</h2>
          <ol className="Baeminchan__ol">
            <li>
              <strong>React, Sass</strong>를 활용하여 배민찬 사이트 핵심기능 요약 및 구현
            </li>
            <li>백엔드와 IOS 총 6명이 한팀이 되어 기획, 디자인, 개발, 서비스배포 사이클을 경험</li>
            <li>
              3주간의 프로젝트로 Github을 적극 활용하여 일정관리, 커밋규칙 등을 관리하고, 협업하는 방법과 이슈 충돌에대해 팀원들과 고민하고, 해결하는
              과정에서 <strong>커뮤니케이션 능력</strong>을 기름.
            </li>
            <li>
              <strong>REST API </strong>사용.
            </li>
            <li>
              SPA를 위한 <strong>React router </strong>사용.
            </li>
            <li>
              메인메이지와 인증페이지를 구현하며, props를 통해 전달하지 않고, 원하는 component에 직접 전달하는 방식의 <strong>context API</strong>를
              사용.
            </li>
            <li>
              <strong>Facebook Login API</strong>를 사용하여, SNS Login 기능 구현.
            </li>
            <li>
              <strong>Vanilla JavaScript</strong>를 사용하여, 메인 slide show 구현.
            </li>
          </ol>
        </article>
        <img src={chan1} alt="img" className="Baeminchan__img" />
        <img src={chan2} alt="img" className="Baeminchan__img" />
        <img src={chan3} alt="img" className="Baeminchan__img" />
        <img src={chan4} alt="img" className="Baeminchan__img" />
        <img src={chan5} alt="img" className="Baeminchan__img" />
        <Linked />
        <Back />
      </div>
    );
  }
}

class Grim extends Component {
  render() {
    return (
      <div className="Grim">
        <div className="Grim__bg">
          <div className="Grim__info">
            <h1 className="Grim__title">Grim</h1>
            <span className="Grim__role">
              <strong>ROLE :</strong> Front-end, SEO, Design /
            </span>
            <span className="Grim__date"> 2018.11.07 ~ 2018.11.09</span>
          </div>
        </div>
        <article className="Grim__article">
          <h2 className="Grim__h2">Experience</h2>
          <ol className="Grim__ol">
            <li>HTML5, CSS3, JavaScript를 활용하여 개발</li>
            <li>Glitch server를 이용해 API 사용</li>
            <li>
              데이터를 불러오는 과정에서 query string을 이용해 다중선택을 하는 기능 구현에 있어 어려움이 있었지만,
              <br />
              <strong>console.log()로 디버깅</strong>하며, 데이터의 구조와 사용법을 이해하고, 버그를 개선함으로써 어려움을 극복함
            </li>
            <li>
              <strong>Bootstrap 라이브러리</strong>를 활용하여 뷰페이지 구성
            </li>
          </ol>
        </article>
        <img src={grim1} alt="img" className="Grim__img" />
        <img src={grim2} alt="img" className="Grim__img" />
        <img src={grim3} alt="img" className="Grim__img" />

        <Linked />
        <Back />
      </div>
    );
  }
}

class Baseball extends Component {
  render() {
    return (
      <div className="Baseball">
        <div className="Baseball__bg">
          <div className="Baseball__info">
            <h1 className="Baseball__title">Baseball</h1>
            <span className="Baseball__role">
              <strong>ROLE :</strong> 기획, 디자인, Front-end /
            </span>
            <span className="Baseball__date"> 22018.10.25 ~ 2018.10.27</span>
          </div>
        </div>
        <article className="Baseball__article">
          <h2 className="Baseball__h2">Experience</h2>
          <ol className="Baseball__ol">
            <li>HTML5, CSS3, JavaScript를 활용하여 숫자야구게임을 개발</li>
            <li>DOM API를 사용함.</li>
            <li>2명이 한팀이 되어 기획, 개발, 서비스배포 사이클을 경험</li>
            <li>협업과정에서 GitHub, Google Drive, Slack 등을 활용하여 협업</li>
            <li>사용자에게 필요한 최소한의 기능구현과 기초 계획과 일정관리의 중요성을 느낄 수 있었던 프로젝트</li>
          </ol>
        </article>
        <img src={Baseball1} alt="img" className="Baseball__img" />
        <img src={Baseball2} alt="img" className="Baseball__img" />
        <img src={Baseball3} alt="img" className="Baseball__img" />

        <Linked />
        <Back />
      </div>
    );
  }
}

class Modal extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Route path="/detailview/0" render={() => <Baeminchan />} />
        <Route path="/detailview/1" render={() => <Grim />} />
        <Route path="/detailview/2" render={() => <Baseball />} />
      </>
    );
  }
}

export default Modal;
