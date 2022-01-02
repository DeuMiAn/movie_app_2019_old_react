import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{
  constructor(props){
    super(props);
    console.log("응애 나 태어남")
  }
  state={
    count:0
  }
  add=()=>{
    this.setState(current=>({count: current.count+1}))
  };
  minus=()=>{
    this.setState(cur=>({count:cur.count-1}))

  };
  componentDidMount(){ //component가 처음 render될 때 호출됨
    console.log("첫 그림 다 그렸달까...")
  }
  componentDidUpdate(){ //coponet가 업데이트될 때 호출됨
    console.log("방금 막 수정함")
  }
  componentWillUnmount(){
    console.log("여기까지인가 보오..")
  }
  render(){
    console.log("그.린.다")
    return <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>add</button>
      <button onClick={this.minus}>minus</button>
      
      </div>
  }
}

export default App;
