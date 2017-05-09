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
      return this.props.setMovies(selectedMovies);
    }
    else{
      for(let index in selectedMovies){
        if (selectedMovies[index].id === this.props.movie.id){
          selectedMovies.splice(index, 1);
          return this.props.setMovies(selectedMovies);
        }
      }
        selectedMovies.push(this.props.movie);
        return this.props.setMovies(selectedMovies);
    }
  }

  buttonType(){
    if (this.props.mode === 'explore'){
      return <button type="button" className="add-movie" onClick={()=> this.addMovieToSelected()}>Add me</button>
    }
    else{
      return <button type="button" className="vote-movie" >Vote</button>
    }
  }

  render(){
    return (
      <div data-index="0" className="slick-slide slick-active slick-center" >
      <div className="movie-card-comp">
      <image className="movie-poster"/>
        <h2>Title: {this.props.movie.title}</h2>
      <p>rate: {this.props.movie.vote_average}</p>
        <h2>Overview</h2>
        <p>{this.props.movie.overview}</p>

      </div>
      </div>
    );
  }

}



function mapStateToProps({ selectedMovies }) {
  return {
    selectedMovies: selectedMovies
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
