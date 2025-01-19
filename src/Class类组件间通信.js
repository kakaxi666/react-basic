import { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        <h1>子组件</h1>{this.props.msg}
        <button onClick={() => this.props.onGetSonMsg("子组件的msg")}>setMsgToparent</button>
      </div>
    );
  }
}

class Parent extends Component {
  state = {
    msg: "父组件的msg"
  }

  getSonMsg = (sonMsg) => {
    console.log("sonMsg",sonMsg);
  }

  render() {
    return (
      <div>
        <h1>父组件</h1>
        <Child msg={this.state.msg} onGetSonMsg={this.getSonMsg}/>
      </div>
    );
  }

}

function App() {
  return (
    <div>
      <Parent />
    </div>
  );
}

export default App;