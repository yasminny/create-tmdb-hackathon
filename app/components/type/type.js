import React from 'react';
import TypeCard from '../typeCard/typeCard';
import './type.css'


export default function Type(){
  const typeDatabase = {type: [
    {
      genre: 'Comedy',
      text: 'Laugh my pants off',
      image: '../../assets/icons/Comedy.png'
    },
    {
      genre: 'Drama',
      text: 'Need some drama',
      image: ''
    },
    {
      genre: 'Family',
      text: 'Family time',
      image: ''
    },
    {
      genre: 'Crime',
      text: 'Going criminal',
      image: ''
    },
    {
      genre: 'Animation',
      text: 'Going cartoon',
      image: ''
    },
    {
      genre: 'Fantasy',
      text: 'Diving to fantasy',
      image: ''
    },
    {
      genre: 'Sience fiction',
      text: 'Some science fiction',
      image: ''
    },
    {
      genre: 'Action',
      text: 'Want some action',
      image: '../assets/icons/Action.png'
    },
    {
      genre: 'Adventure',
      text: 'For adventure',
      image: ''
    },
    {
      genre: 'Romance',
      text: 'To fall in love',
      image: ''
    },
    {
      genre: 'Horror',
      text: 'Screaming my hat off',
      image: ''
    },
    {
      genre: 'Thriller',
      text: 'Some tension',
      image: ''
    }
  ]};
  // console.log('type');
  return (
    <div className="type-comp">
      <h1>You in a mood for...</h1>
      <ul className="choose-type">
        {
          typeDatabase.type.map((typeData, i) => {
              return <li className="type-card" key={ i }>
                <TypeCard
                  type={typeData}/>
              </li>
            }
          )}
      </ul>
    </div>
  );
}
