import React from "react";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({ addClass: !this.state.addClass });
  }
  render() {
    let btnClassName = this.state.addClass ? "btnn" : "btnm";
    let menuClassName = this.state.addClass ? "show" : "menu";
    let linkClassName = this.state.addClass ? "showed" : "hidden";
    return (
      <div>
        <div className={btnClassName} onClick={this.toggle}>
          <span />
          <span />
          <span />
        </div>
        <div className={menuClassName}>
          <div className="linkWidth">
            <a className={linkClassName}>RESUME</a>
          </div>
          <div className="linkWidth">
            <a id="l1" className={linkClassName}>
              ABOUT
            </a>
          </div>
          <div className="linkWidth">
            <a id="l2" className={linkClassName}>
              CONTACT
            </a>
          </div>
          <div className="linkWidth">
            <a className={linkClassName}>PORTFOLIO</a>
          </div>
        </div>
      </div>
    );
  }
}
