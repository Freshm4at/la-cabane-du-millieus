import React from 'react'
import './CustomImage.css'

const CustomImage = ({src,alt,height,width}) => {
  return (
    <div className="app__img-render" style={{height:height,width:width}}>
        <div className="app__square-up"></div>
            <img src={src} alt={alt}></img>
        <div className="app__square-down"></div>
    </div>
  )
}

export default CustomImage