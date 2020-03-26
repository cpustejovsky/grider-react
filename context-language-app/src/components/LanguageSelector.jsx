import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
export default class LanguageSelector extends Component {
  static contextType = LanguageContext;
  render() {
      console.log(this.context)
    return (
      <div>
        <div>
          Select a Language:
          <i
            onClick={() => this.context.onLanguageChange("english")}
            className="flag us"
          />
          <i
            onClick={() => this.context.onLanguageChange("dutch")}
            className="flag nl"
          />
        </div>
      </div>
    );
  }
}
