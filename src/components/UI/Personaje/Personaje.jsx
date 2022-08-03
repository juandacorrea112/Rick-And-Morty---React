import React from 'react'
import { Card } from '../Card/Card'

export const Personaje = ({character}) => {
  return (
    <div className='persons'>
        {character.map(data => 
          <Card key={data.id}
          character = {data}
          />
        )}
    </div>
  )
}