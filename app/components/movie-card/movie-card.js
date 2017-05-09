import React from 'react';
import { connect } from 'react-redux';

class MovieCard extends React.Component {
  constructor() {
    super();
    this.addMovieToSelected = this.addMovieToSelected.bind(this);
    this.buttonType = this.buttonType.bind(this);
    this.getFriends = this.getFriends.bind(this);
  }

  addMovieToSelected(){
    let selectedMovies = [...this.props.selectedMovies];
    if(selectedMovies.length === 0){
      selectedMovies.push(this.props.movie);
      return this.props.setMovies(selectedMovies);
    }
    if(selectedMovies.length === 3){
      alert('choose up to 3 movies, please');
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

  getFriends(){
    const friendsList = ['assets/design/slides pics/slide center.png', 'assets/design/slides pics/slide left.png', 'assets/design/slides pics/slide right.png'];
    for (let index in this.props.selectedMovies){
      return <div className="friend-list">{friendsList[index]}</div>
    }
  }

  buttonType(){
    if (this.props.state === 'explore'){
      return <button type="button" className="add-movie" onClick={()=> this.addMovieToSelected()}>Add/Remove me</button>
    }
    else{
      return <div>
        <p>Want it</p>
          {this.getFriends()}
      </div>
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
        {this.buttonType()}
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
