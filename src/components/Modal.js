import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import modal from './_modal.scss';

class Baeminchan extends Component {
  render() {
    return (
      <div>
        <h1>Baeminchan Copy</h1>
        <span>ROLE : Front-end, SEO, Design</span>
        <span>2018.12.03 ~ 2018.12.20</span>
        <article>
          <h2>Experience</h2>
          <ol>
            <li>React, Sass를 활용하여 배민찬 사이트 핵심기능 요약 및 구현</li>
            <li>백엔드와 IOS 총 6명이 한팀이 되어 기획, 디자인, 개발, 서비스배포 사이클을 경험</li>
            <li>
              3주간의 프로젝트로 Github을 적극 활용하여 일정관리, 커밋규칙 등을 관리하고, 협업하는 방법과 이슈 충돌에대해 팀원들과 고민하고, 해결하는
              과정에서 커뮤니케이션 능력을 기름.
            </li>
            <li>REST API 사용.</li>
            <li>SPA를 위한 React router 사용.</li>
            <li>메인메이지와 인증페이지를 구현하며, props를 통해 전달하지 않고, 원하는 component에 직접 전달하는 방식의 context API를 사용.</li>
            <li>Facebook Login API를 사용하여, SNS Login 기능 구현.</li>
            <li>Vanilla JavaScript를 사용하여, 메인 slide show 구현.</li>
          </ol>
        </article>
        <img src="#" alt="" />
      </div>
    );
  }
}

class Grim extends Component {
  render() {
    return (
      <div>
        <h1>GRIM</h1>
        <span>ROLE : Front-end, SEO, Design</span>
      </div>
    );
  }
}

class Baseball extends Component {
  render() {
    return (
      <div>
        <h1>NUMBER BASEBALL GAME</h1>
        <span>ROLE : Front-end, SEO, Design</span>
      </div>
    );
  }
}

class Modal extends Component {
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
