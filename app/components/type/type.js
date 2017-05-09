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
      image: '../../assets/icons/Drama.png'
    },
    {
      genre: 'Family',
      text: 'Family time',
      image: '../../assets/icons/Family.png'
    },
    {
      genre: 'Crime',
      text: 'Going criminal',
      image: '../../assets/icons/Crime.png'
    },
    {
      genre: 'Animation',
      text: 'Going cartoon',
      image: '../../assets/icons/Animation.png'
    },
    {
      genre: 'Fantasy',
      text: 'Diving to fantasy',
      image: '../../assets/icons/Fantasy.png'
    },
    {
      genre: 'Science-fiction',
      text: 'Some science fiction',
      image: '../../assets/icons/Sience-fiction.png'
    },
    {
      genre: 'Action',
      text: 'Want some action',
      image: '../assets/icons/Action.png'
    },
    {
      genre: 'Adventure',
      text: 'For adventure',
      image: '../../assets/icons/Adventure.png'
    },
    {
      genre: 'Romance',
      text: 'To fall in love',
      image: '../../assets/icons/Romance.png'
    },
    {
      genre: 'Horror',
      text: 'Screaming my hat off',
      image: '../../assets/icons/Horror.png'
    },
    {
      genre: 'Thriller',
      text: 'Some tension',
      image: '../../assets/icons/Thriller.png'
    }
  ]};
  return (
    <div className="type-comp">
      <span className="title"><h1>You in a&nbsp;</h1><h1>mood&nbsp;</h1><h1>for?</h1></span>
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
