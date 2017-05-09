import {
  NavLink
} from 'react-router-dom';
import React from 'react';

export default function Signin(){
  return (
    <div className="signin-comp">
      <div className="icon"/>
      <h1>User Name</h1>
      <p>Paragraph</p>
      <button type="button" className="fb-signup"><NavLink to="type">Sign In with your FaceBook account</NavLink></button>
    </div>
  );
}
