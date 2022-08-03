import React from 'react'

export const ImgCard = ({classImgCard, recursoimage}) => {
  return (
    <img className={classImgCard} src={recursoimage} alt="" />
  )
}