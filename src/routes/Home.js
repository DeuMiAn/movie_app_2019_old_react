import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }, //es6 ECMA script의 새로운버전
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false }); //state.movies : 파싱한movies
  };
  componentDidMount() {
    //처음렌더링 될떄 호출
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state; //ES6 JS 문법
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(
              (
                movie // 애로우 펑션 차이 =>(리턴값) , =>{  계산식 return(리턴값)}
              ) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              )
            )}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
