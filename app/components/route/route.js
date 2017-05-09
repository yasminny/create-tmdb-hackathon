import Explore from '../explore/explore';
import Signin from '../signin/signin';
import Type from '../type/type';
import Vote from '../vote/vote';
import Topbar from '../topbar/topbar';
import Friends from '../friends/friends';
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import React from 'react';

export default class Root extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className="route-comp">
        <main>
          <Topbar
            {...this.props}/>
          <Switch>
            <Route exact path="/" component={() => {
              return <Redirect to="/type"/>
            }}/>
            <Route path="/signin" component={ Signin }/>
            <Route exact path="/explore" component={ () => {
              return <Redirect to="/explore/Comedy"/>
            }}/>
            <Route path="/explore/:genre" component={ Explore }/>
            <Route exact path="/type" component={ Type }/>
            <Route exact path="/vote" component={ Vote }/>
            <Route exact path="/friends" component={ Friends }/>
          </Switch>
        </main>
      </div>);
  }
  ;

}
