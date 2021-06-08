import React, { Component } from "react";
import LangugeContext from "../contexts/LangugeContext";

class Field extends Component {
  static contextType = LangugeContext;
  render() {
    const text = this.context === "english" ? "Name" : "Naam";
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
