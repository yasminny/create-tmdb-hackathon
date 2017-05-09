import {NavLink} from 'react-router-dom';
import React from 'react';

export default function TypeCard(props) {
  const link = `/explore/${props.type.genre}`;
  return (
    <div>
      <NavLink to={link} activeClassName="selected-genre"><span className="icon" style={{'backgroundImage': `url( ${props.type.image})`}}/> {props.type.text}</NavLink>
    </div>
  );
}
