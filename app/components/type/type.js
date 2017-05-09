import {NavLink} from 'react-router-dom';
import React from 'react';

export default function Type(){
  console.log('type');
  return (
    <div className="type-comp">
      <h1>What are you in the mood for?</h1>
      <ul className="choose-type">
        <li><NavLink to="/explore/comedy" activeClassName="selected-genre">laughing</NavLink></li>
        <li><NavLink to="/explore/horror" activeClassName="selected-genre">screaming scared</NavLink></li>
        <li><NavLink to="/explore/thriller" activeClassName="selected-genre">biting your nails in suspension</NavLink></li>
        <li><NavLink to="/explore/drama" activeClassName="selected-genre">crying</NavLink></li>
        <li><NavLink to="/explore/documentary" activeClassName="selected-genre">thinking</NavLink></li>
        <li><NavLink to="/explore/science fiction" activeClassName="selected-genre">futurestic</NavLink></li>
      </ul>
    </div>
  );
}
