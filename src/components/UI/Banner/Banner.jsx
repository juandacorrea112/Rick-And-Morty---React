import React from 'react';
import { ImgTemplate } from '../ImgTemplate/ImgTemplate';
import banner  from '../../../Images/rickymorty_bleed.png';

export const Banner = () => {
  return (
    <div className='contImgB'>
        <ImgTemplate clase="banner" recurso={banner} text= "banner"/>
    </div>
  )
}
