import React from "react";
import { Link } from "react-router-dom";

export default class Intro extends React.Component {
  render() {
    return (
      <div>
        <section className="intro">
          <span className="text1">I'm Steve Piron</span>
          <span className="text2">Junior Web Developer</span>
          <Link to="/resume">
            <button className="text3">Resume</button>
          </Link>
        </section>
      </div>
    );
  }
}
