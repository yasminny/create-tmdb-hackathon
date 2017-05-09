import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

class Friends extends React.Component {
  constructor() {
    super();

  }

  render() {
    const link = `/vote`;
    return <div>
      <image>friends</image>
      <button className="toVote"><NavLink to={link} activeClassName="go-to-vote">Start voting</NavLink></button>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    selectedMovies: state.selectedMovies
  };
}


export default connect(mapStateToProps)(Friends);
