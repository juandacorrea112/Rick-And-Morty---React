import React from 'react'

export const Input = ({texto, setTexto}) => {

  const handleInputChange = ({target}) => {
    setTexto(target.value)
  }

  const handleSumbit = (e) => {
    e.preventDefault()

    console.log(texto);
  }

  return (
    <div onSubmit={handleSumbit}>
        <input className= "input" type="text" name="" id="" value={texto} onChange={handleInputChange}/>
        <button className='Buscar'>BUSCAR</button>
    </div>
  )
}
