import React, { Component } from "react";
import UserCreate from "./UserCreate";
import LangugeContext from "../contexts/LangugeContext";
import ColorContext from "../contexts/ColorContext";

class App extends Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag in"
            onClick={() => this.onLanguageChange("hindi")}
          />
          {/* A provider links a component that provides value to context object.
            Provider needs to wrap the component/children of the component that requires the context value.
            value here is a special string that copies value( in our case language ) to context objects data.
           */}
          <LangugeContext.Provider value={this.state.language}>
            <ColorContext.Provider value="red">
              <UserCreate />
            </ColorContext.Provider>
          </LangugeContext.Provider>
          {/* If you create a new Provider , a new context is created which is completely different than the one above */}
          {/* <LangugeContext.Provider value={this.state.language}>
            <UserCreate />
          </LangugeContext.Provider> */}
        </div>
      </div>
    );
  }
}

export default App;
