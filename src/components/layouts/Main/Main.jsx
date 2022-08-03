import React from 'react';
import { Input } from '../../UI/Input/Input';
import {useEffect, useState} from 'react';
import { Personaje } from '../../UI/Personaje/Personaje';

export const Main = () => {

  const [character, setCharacter] = useState([]);

  const URL = 'https://rickandmortyapi.com/api/character'

  const fetchData = async (api) => {
    const res = await fetch(api);
    const data = await res.json();
    return data
  }

  const getCharacter = async () => {
    const rez = await fetchData(URL)
    const dato = rez.results
    setCharacter(dato)
  }

  useEffect(() => { 
    getCharacter();
  }, []);

  
  const [texto, setTexto] = useState ('')
  const personajes = character.filter(data => data.name.toUpperCase().includes(texto.toUpperCase()))

  return (
    <div className='Main'>
      <form>
        <Input texto={texto} setTexto={setTexto}/>
        <Personaje character={personajes}/>
      </form>
    </div>
  )
}