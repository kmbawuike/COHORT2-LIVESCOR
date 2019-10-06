import React, { Component } from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleString()
    };
  }

  render() {
    return (
      <div class="date">
        <p> {this.state.date} </p>
      </div>
    );
  }
}

export default Footer;
