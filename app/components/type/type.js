
import React from 'react';
import TypeCard from '../typeCard/typeCard';


export default function Type(){
  const typeDatabase = {type: [
    {
      genre: '',
      text: '',
      image: ''
    }
  ]};
  console.log('type');
  return (
    <div className="type-comp">
      <h1>What are you in the mood for?</h1>
      <ul className="choose-type">
        {
          typeDatabase.type.map((type, i) => {
              return <li  key={ i }>
                <TypeCard
                  type={type}/>
              </li>
            }
          )}
      </ul>
    </div>
  );
}
