import React, { Component } from 'react'

export default class SeasonDisplay extends Component {

  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      errorMsg: ""
    }

    const success = (pos) => this.setState({ latitude: pos.coords.latitude })
    const error = (err) => this.setState({ errorMsg: err.message })
    window.navigator.geolocation.getCurrentPosition(success, error);
  }
  componentDidMount() {
    console.log("COMPONENENT MOUNTED");
  }

  componentDidUpdate() {
    console.log("COMPONENT UPDATED")
  }

  render() {
    if (this.state.errorMsg && !this.state.latitude) {
      return (
        <div className="ui container">
          <div className="ui negative message">
            <div className="header">
              {this.state.errorMsg}
            </div>
          </div>
        </div>
      )
    }
    if (!this.state.errorMsg && this.state.latitude) {
      return (
        <div className="ui container">
          <div className="ui message">
            <div className="header">
              Latitude: {this.state.latitude}
            </div>
          </div>
        </div>
      )
    }
    if (!this.state.errorMsg && !this.state.latitude) {
      return <div></div>
    }

  }

}