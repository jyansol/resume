import React, { Component } from 'react';

export default class Project extends Component {
  static defaultProps = {
    image: ['../images/baseball.png', '../images/grim.png'],
  };
  render() {
    const { image } = this.props;
    return (
      <>
        <h1>Project</h1>
        {image.map((i) => (
          <img src={i} alt="project" />
        ))}
      </>
    );
  }
}
