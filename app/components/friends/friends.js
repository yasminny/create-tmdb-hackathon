import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import React from 'react';

class Friends extends React.Component {
  constructor() {
    super();

  }

  render() {
    return <div>
      <image>friends</image>
      <button className="toVote"><NavLink to={`/vote`} activeClassName="go-to-vote">Start voting</NavLink></button>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    selectedMovies: state.selectedMovies
  };
}


export default connect(mapStateToProps)(Friends);
