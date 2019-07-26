import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default function withAuth(ComponentToProtect) {
  return class extends Component {
    state = {
      authicate: true,
      redirect: false
    };

    componentDidMount() {
      if (localStorage.length) {
        this.setState({ loading: false });
      }
      if (localStorage.length === 0) {
        this.setState({
          redirect: true,
          loading: false
        });
      }
    }

    render() {
      if (this.state.redirect) {
        return <Redirect to="/login" />;
      }
      return (
        <React.Fragment>
          <ComponentToProtect {...this.props} />
        </React.Fragment>
      );
    }
  };
}
