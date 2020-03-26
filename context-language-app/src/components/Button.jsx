import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends Component {
  renderButton(language) {
    if (language === "dutch") {
      return "Voorleggen";
    } else {
      return "Submit";
    }
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {({ language }) => this.renderButton(language)}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

// // replaces `static contextType = LanguageContext;`
// Button.contextType = LanguageContext;
export default Button;
