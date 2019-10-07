import React, { Component } from "react";
import './Head.css';

class Head extends React.Component {
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

export default Head;
