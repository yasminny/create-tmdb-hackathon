import React from 'react';
import TypeCard from '../typeCard/typeCard';


export default function Type(){
  const typeDatabase = {type: [
    {
      genre: 35,
      text: 'Laugh my pants off',
      image: ''
    },
    {
      genre: 18,
      text: 'Need some drama',
      image: ''
    },
    {
      genre: 10751,
      text: 'Family time',
      image: ''
    },
    {
      genre: 80,
      text: 'Going criminal',
      image: ''
    },
    {
      genre: 16,
      text: 'Going cartoon',
      image: ''
    },
    {
      genre: 14,
      text: 'Diving to fantasy',
      image: ''
    },
    {
      genre: 878,
      text: 'Some science fiction',
      image: ''
    },
    {
      genre: 28,
      text: 'Want some action',
      image: ''
    },
    {
      genre: 10749,
      text: 'To fall in love',
      image: ''
    },
    {
      genre: 27,
      text: 'Screaming my hat off',
      image: ''
    },
    {
      genre: 53,
      text: 'Some tension',
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
