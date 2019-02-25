import React, { Component } from "react";
// import logo from "./logo.svg";
import LifeCircle from "./LifeCircle";
import { Button } from "antd";

import "./App.css";
function Welcome(props) {
  return <i>{props.user}</i>;
}
function SubjectList(props) {
  return (
    <div>
      <ul>
        {props.list.map(item => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    // setInterval(() => {
    //   this.setState((prevState, prevProps) => ({
    //     count: prevState.count + 3
    //   }));
    // }, 1000);
  }

  render() {
    // const jsx = <p>hello react</p>;
    const list = ["数学", "语文", "英语", "物理"];
    return (
      <div className="App">
        {/* <p>{this.formateName({ firstname: "wu", lastname: "xiaolin" })}</p>
        <p>
          <img src={logo} style={{ width: "100px" }} />
        </p>
        <p>{jsx}</p> */}
        <div>{this.state.count}</div>
        <SubjectList list={list} />
        <Welcome user="wuxiaolin" />
        <LifeCircle />
        <Button type="primary">primary</Button>
      </div>
    );
  }
}

export default App;
