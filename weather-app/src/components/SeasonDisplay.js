import React, { Component } from 'react'

export default class SeasonDisplay extends Component {
  //Good place for one-time setup
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      errorMsg: ""
    }
  }
  //Good place to do data-loading
  componentDidMount() {
    console.log("COMPONENENT MOUNTED");
    const success = (pos) => this.setState({ latitude: pos.coords.latitude })
    const error = (err) => this.setState({ errorMsg: err.message })
    window.navigator.geolocation.getCurrentPosition(success, error);
  }
  //Good place to do more data-loading when state/props change
  componentDidUpdate() {
    console.log("COMPONENT UPDATED")
  }
  //Good place to do clean up, especially for non-React stuff
  componentWillUnmount() {
    console.log("COMPONENENT WILL UNMOUNT")
  }
  //Avoid doing anything besides returning JSX
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
          <div className="ui success message">
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