import {connect} from 'react-redux';
import MovieCard from '../movie-card/movie-card';
import Slider from 'react-slick';
import React from 'react';

class Vote extends React.Component {
  constructor() {
    super();

  }

  render() {
    const settings = {
      dots: true,
      focusOnSelect: true,
      infinite: true,
      centerMode: true,
      adaptiveHeight: true,
      arrows: true,
      speed: 500
    };
    console.log(this.props.selectedMovies);

    return (
      <div className="vote-comp">
        <h1>Vote</h1>
        {!!this.props.selectedMovies.length && <Slider {...settings}>
          {
            this.props.selectedMovies.map((item, i) => {
                console.log(item);
                return <div key={ i }>
                  <MovieCard
                    movie={item}
                  state={'vote'}/>
                </div>
              }
            )}
        </Slider>}
        <div>image</div>
        <button type="button">Stop the vote!</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedMovies: state.selectedMovies
  };
}


export default connect(mapStateToProps)(Vote);
