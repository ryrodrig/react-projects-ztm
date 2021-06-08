import React, { Component } from "react";
import LangugeContext from "../contexts/LangugeContext";
import ColorContext from "../contexts/ColorContext";
class Button extends Component {
  // reading a context within a component.
  // 2 options - 1. this.context , 2. Consumer
  // 1. Link the component to the context object.
  //    for linking we use contextType.
  // contextType is a static variable - meaning its associated with a class like Button.contextType.. We create an instance of class using the following <Button />
  // The name needs to be contextType any other name won't work..
  // static contextType = LangugeContext;

  render() {
    // 2. retrieve data from within the context object , use this.context or use consumer.
    // this.context
    // const text = this.context === "english" ? "Submit" : "Maaro";
    // return <button className="ui button primary">{text}</button>;

    return (
      // Multiple contexts using consumer.
      <ColorContext.Consumer>
        {/* should contain only a function. */}
        {(color) => (
          <button className={`ui button ${color}`}>
            {/* Option 2 : Use consumer to retrieve data from context object.. To be used if component needs access to multiple context */}
            <LangugeContext.Consumer>
              {/* Consumer takes a function with one param which is the data within the context object. */}
              {(value) => (value === "english" ? "Submit" : "Maaro")}
            </LangugeContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}
// Also an option for linking context object to component.
// Button.contextType = LangugeContext;

export default Button;
