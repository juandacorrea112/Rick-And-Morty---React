import React from 'react'

export const ImgTemplate = ({clase, recurso, text}) => {
  return (
    <img className={clase} src={recurso} alt={text} />
  )
}
