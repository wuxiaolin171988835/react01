import React, { Component } from "react";

class LifeCircle extends Component {
  constructor(props) {
    super(props);
    console.log("1：construct");
  }
  componentWillMount() {
    console.log("2：componentWillMount");
  }
  componentDidMount() {
    console.log("4：componentDidMount");
  }
  componentWillReceiveProps() {
    console.log("5：componentWillReceiveProps");
  }
  shouldComponentUpdate() {
    console.log("6：shouldComponentUpdate");
    return true;
  }
  componentWillUpdate() {
    console.log("7：componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("9：componentDidUpdate");
  }
  render() {
    console.log("3：8：render");
    return <div>{this.props.test}</div>;
  }
}

// export default LifeCircle;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "aaa"
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        test: "bbb"
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <LifeCircle test={this.state.test} />
      </div>
    );
  }
}
