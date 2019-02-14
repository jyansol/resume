import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Project from './Project';

export default class Back extends Component {
  componentDidUpdate() {
    window.history.back();
  }
  render() {
    return (
      <div>
        <div className="Back">
          <Link to="/" className="Back__a">
            <button className="Back__backbtn" />
          </Link>
        </div>
      </div>
    );
  }
}
