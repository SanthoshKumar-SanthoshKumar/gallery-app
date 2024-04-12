import React from 'react'
import './index.css'

const Thumbnailitem = props => {
    const {imagesDetails,updateActiveImage,isActive} = props 
    const {imageUrl,id,thumbnailAltText} = imagesDetails 

    const onClickImage = ()=>{
        updateActiveImage(id)
    }
    const thumbnailActiveImage = isActive ? 'thumbnail active':'thumbnail'
  return (
    <li className='thumbnail-container'>
        <button type="button" className='thumb-image-button' onClick={onClickImage}>
           <img src={imageUrl} alt={thumbnailAltText} className={thumbnailActiveImage}/>
        </button>
        
    </li>
  )
}

Thumbnailitem.propTypes = {}

export default Thumbnailitem