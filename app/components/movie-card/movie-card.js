import React from 'react';
import { connect } from 'react-redux';

class MovieCard extends React.Component {
  constructor() {
    super();
    this.addMovieToSelected = this.addMovieToSelected.bind(this);
  }

  addMovieToSelected(){
    let selectedMovies = [...this.props.selectedMovies];
    if(selectedMovies.length === 0){
      selectedMovies.push(this.props.movie);
    }
    else{
      const movieIndex = selectedMovies.findIndex((movie)=> movie === this.props.movie);
      if(movieIndex>= 0){
        selectedMovies.splice(movieIndex, 1);
      }
      else {
        selectedMovies.push(this.props.movie);
      }
    }
  }

  render(){
    return (<div className="movie-card-comp">
      <h1>Movie for your mood</h1>
      <image className="movie-poster"/>
        <h2>movie title</h2>
      <p>rate</p>
        <h2>duration</h2>
        <h2>overview</h2>
        <button type="button" className="add-movie" onClick={()=> this.addMovieToSelected()}>Add me</button>
      </div>
    );
  }

}



function mapStateToProps({ state }) {
  return {
    selectedMovies: state.selectedMovies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setMovies(data) {
      dispatch({
        type: 'SET_SELECTED_MOVIES',
        data: data
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
