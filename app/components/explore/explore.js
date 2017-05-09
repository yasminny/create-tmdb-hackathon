import React from 'react';
import TMDB from '../../core/tmdb';
import {connect} from 'react-redux';
import MovieCard from '../movie-card/movie-card';
import Slider from 'react-slick';
import {NavLink} from 'react-router-dom';
import './explore.css';


class Explore extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false
    };

    this.loadMovies = this.loadMovies.bind(this);
    this.getGenreId = this.getGenreId.bind(this);
    this.getSelectedMovies = this.getSelectedMovies.bind(this);
  }

  componentDidMount() {
    this.loadMovies();
  }

  // shouldComponentUpdate(nextProps){
  //   if(this.props !== nextProps){
  //     this.getSelectedMovies()
  //   }
  //
  // }

  componentDidUpdate(){
    this.getSelectedMovies()
  }

  getGenreId() {
    const genre = this.props.match.params.genre.toString();

    let genreListObj = {
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

    for (const genreInList of genreListObj.genres) {
      if (genre === genreInList.name) {
        return genreInList.id;
      }
    }

  }

  loadMovies() {
    const genreId = this.getGenreId();

    this.setState({
      loading: true
    });

    TMDB.get(`/genre/${genreId}/movies?sort_by=popularity.desc`)
      .then((data) => {
        console.log(data);

        this.setState({
          loading: false
        });

        this.props.setMovies(data.results);
      });

  }

  getSelectedMovies(){
    console.log('get selected movies', this.props.selectedMovies.length);

    if(this.props.selectedMovies.length === 0){
      console.log('print');
      return <ul>
        <li className="selected-movie">?</li>
        <li className="selected-movie">?</li>
        <li className="selected-movie">?</li>
      </ul>
    }
    else{
      if(this.props.selectedMovies.length === 3){
        return this.props.selectedMovies.map((selectedMovie, i) => {
            return <div key={ i } className="selected-movie">
              <image>image</image>
            </div>
          }
        )
      }
      if(this.props.selectedMovies.length === 2){
        const partialList = this.props.selectedMovies.map((selectedMovie, i) => {
            return <div key={ i } className="selected-movie">
              <image>image</image>
            </div>
          }
        );
        return <div>
          {partialList}
          <div className="selected-movie">?</div>
        </div>
      }
      if(this.props.selectedMovies.length === 1){
        const partialList = this.props.selectedMovies.map((selectedMovie, i) => {
            return <div key={ i } className="selected-movie">
              <image>image</image>
            </div>
          }
        );
        return <div>
          {partialList}
          <div className="selected-movie">?</div>
          <div className="selected-movie">?</div>
        </div>
      }
    }
  }


  render() {
    const nextBtnClass = this.props.selectedMovies === 3? "next" : "next disabled";
    const link = `/friends`;

    const settings = {
      // dots: true,
      focusOnSelect: true,
      infinite: true,
      centerMode: true,
      // adaptiveHeight: true,
      // slidesToShow: 3,
      arrows: true,
      speed: 500
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />
    };
    console.log(this.props.movies);

    return (
      <div className="explore-comp">
        <h2>Movie for your mood</h2>

        {!!this.props.movies.length && <Slider {...settings}>
            {
              this.props.movies.map((item, i) => {
                console.log(item);
                  return <div key={ i }>
                    <MovieCard
                      movie={item}
                      state={'explore'}/>
                  </div>
                }
              )}
        </Slider>}

        <div className="select-movie-list">
          { this.getSelectedMovies()}
        </div>
        <div className="footer">
          <div className="choice-square choice-one">?</div>
          <div className="choice-square choice-two">?</div>
          <div className="choice-square choice-three">?</div>
          <div className="stop-vote-btn"><img src="../assets/pics/stop-btn.png" alt=""/></div>
          <button className={nextBtnClass}><NavLink to={link} activeClassName="go-to-friends">choose your friends</NavLink></button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
    selectedMovies: state.selectedMovies
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
