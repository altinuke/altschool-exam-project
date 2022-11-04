import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error)
      return (
        <div className="error" style={{ color: "red" }}>
          {" "}
          An error occured
        </div>
      );

    return this.props.children;
  }
}

export default ErrorBoundary;
