import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

class App extends React.Component{
  state={
    isLoading:true,
    movies:[],
  }
  getMovies= async()=>{
    const movies =await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json")
    
  }
  componentDidMount(){ //처음렌더링 될떄 호출
    this.getMovies();
  }
  render(){
    const{isLoading}=this.state;//ES6 JS 문법
    return <div>
      {isLoading? "Loading...":"we are ready"}
      </div>
  }
}

export default App;
