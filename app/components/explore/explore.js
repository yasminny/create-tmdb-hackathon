import React from 'react';
import TMDB from '../../core/tmdb';
import { connect } from 'react-redux';
import MovieCard from '../movie-card/movie-card';

class Explore extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false
    };

    this.loadMovies = this.loadMovies.bind(this);
    this.getGenreId = this.getGenreId.bind(this);
  }

  getGenreId(){
    const genre = this.props.match.params.genre.toString();
    let genreListObj= {
      "genres": [
        {
          "id": 28,
          "name": "Action"
        },
        {
          "id": 12,
          "name": "Adventure"
        },
        {
          "id": 16,
          "name": "Animation"
        },
        {
          "id": 35,
          "name": "Comedy"
        },
        {
          "id": 80,
          "name": "Crime"
        },
        {
          "id": 99,
          "name": "Documentary"
        },
        {
          "id": 18,
          "name": "Drama"
        },
        {
          "id": 10751,
          "name": "Family"
        },
        {
          "id": 14,
          "name": "Fantasy"
        },
        {
          "id": 36,
          "name": "History"
        },
        {
          "id": 27,
          "name": "Horror"
        },
        {
          "id": 10402,
          "name": "Music"
        },
        {
          "id": 9648,
          "name": "Mystery"
        },
        {
          "id": 10749,
          "name": "Romance"
        },
        {
          "id": 878,
          "name": "Science Fiction"
        },
        {
          "id": 10770,
          "name": "TV Movie"
        },
        {
          "id": 53,
          "name": "Thriller"
        },
        {
          "id": 10752,
          "name": "War"
        },
        {
          "id": 37,
          "name": "Western"
        }
      ]
    };

    for (genreInList of genreListObj.genres){
      if (genre === genreInList.name){
        return genreListObj.genres.id;
      }
    }

  }

  loadMovies(){
    const genreId = this.getGenreId();
      this.setState({
      loading: true
    });

    TMDB.get(`genre/${genreId}/movies?sort_by=popularity.desc`)
      .then((data) => {
console.log(data);
        this.setState({
          loading: false
        });

        this.props.setMovies(data.results);
      });

  }


  render() {
    return(
        <div className="explore-comp">
          <div className="select-movie-list">
            <ul>
              <li className="option-one">?</li>
              <li className="option-two">?</li>
              <li className="option-three">?</li>
            </ul>
          </div>
<div className="carusel">
  {
    this.props.movies.map((item, i) => {
        return <li  key={ i }>
          <MovieCard
            movie={item}/>
        </li>
      }
    )}
</div>
        </div>
      );
  }
}

function mapStateToProps({ state }) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setMovies(data) {
      dispatch({
        type: 'SET_MOVIES',
        data: data
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
