import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Project from './Project';

export default class Back extends Component {
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
