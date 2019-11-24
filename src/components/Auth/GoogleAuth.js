import React from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "../../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "936169566699-f8go37bfrk5kadc41pate2rrn5agcokg.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  isSignIn = () => {
    this.auth.signIn();
  };
  isSignOut = () => {
    this.auth.signOut();
  };
  onAuthChange = isSignedIn => {
    if (isSignedIn) this.props.signIn(this.auth.currentUser.get().getId());
    else this.props.signOut();
  };
  renderAuthStatus() {
    switch (this.props.isSignedIn) {
      case true:
        return (
          <button className="ui red google button" onClick={this.isSignOut}>
            <i className="google icon"></i>
            Sign Out
          </button>
        );
      case false:
        return (
          <button className="ui blue google button" onClick={this.isSignIn}>
            <i className="google icon"></i>
            Sign In
          </button>
        );
      default:
        return null;
    }
  }
  render() {
    return <div>{this.renderAuthStatus()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.authData.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
