import React from 'react';


export const Card = ({character}) => {
  return (
    <div className= "classCard">
        <div className='contImage'>
            <img className='ImgCard' src= {character.image} alt="rick and morty" />
        </div>
        <div>
            <p>{character.id}</p>
            <p>{character.name}</p>
            <p>{character.location.name}</p>
            <p>{character.species}</p>
        </div>
    </div>
  )
}
