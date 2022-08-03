import React from 'react';
import { Header } from '../../layouts/Header/Header';
import { Main } from '../../layouts/Main/Main';

export const Inicio = ({character}) => {
  return (
    <div>
        <Header/>
        <Main character={character}/>
    </div>
  )
}
