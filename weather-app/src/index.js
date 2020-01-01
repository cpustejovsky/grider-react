import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./components/SeasonDisplay";

export default class App extends Component {
  //Good place for one-time setup
  state = {
    latitude: null,
    errorMsg: ""
  };

  //Good place to do data-loading
  componentDidMount() {
    const success = pos => this.setState({ latitude: pos.coords.latitude });
    const error = err => this.setState({ errorMsg: err.message });
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    window.navigator.geolocation.getCurrentPosition(success, error, options);
  }
  //Good place to do more data-loading when state/props change
  componentDidUpdate() {}
  //Good place to do clean up, especially for non-React stuff
  componentWillUnmount() {}
  //Avoid doing anything besides returning JSX
  render() {
    if (this.state.errorMsg && !this.state.latitude) {
      return (
        <div className="ui container">
          <div className="ui negative message">
            <div className="header">{this.state.errorMsg}</div>
          </div>
        </div>
      );
    }
    if (!this.state.errorMsg && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    }
    if (!this.state.errorMsg && !this.state.latitude) {
      return (
        <div className="ui container">
          <div className="ui message">
            <div className="header">Season App</div>
          </div>
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
