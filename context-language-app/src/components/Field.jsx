import React, { Component } from "react";

import LanguageContext from "../contexts/LanguageContext";

class Field extends Component {
  static contextType = LanguageContext;

  renderField(language) {
    if (language === "dutch") {
      return "Naam";
    } else {
      return "Name";
    }
  }
  render() {
    return (
      <div className="ui field">
        <label>
          {" "}
          <LanguageContext.Consumer>
            {({ language }) => this.renderField(language)}
          </LanguageContext.Consumer>
        </label>
        <input type="text" name="" id="" />
      </div>
    );
  }
}
export default Field;
