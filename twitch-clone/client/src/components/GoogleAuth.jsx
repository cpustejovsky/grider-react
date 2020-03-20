import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          client_id: process.env.REACT_APP_CLIENT_ID,
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get(), this.auth.currentUser.get().getId());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn, id) => {
    if (isSignedIn) {
      this.props.signIn(id);
    } else {
      this.props.signOut(id);
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    }
    if (this.props.isSignedIn === true) {
      return (
        <div className="item">
          {this.props.userId}
          <button
            className="ui red google button"
            onClick={this.onSignOutClick}
          >
            <i className="google icon"></i>Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <div className="item">
          <button
            className="ui green google button"
            onClick={this.onSignInClick}
          >
            <i className="google icon"></i>Sign In with Google
          </button>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
