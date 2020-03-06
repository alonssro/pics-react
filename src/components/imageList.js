import React from 'react'
import './ImageList.css'
import ImageCard from './ImageCard'

const ImageList = ({ images }) => {
    const imageElements = images.map(
        ({ description, urls: { regular }, id }) => {
            return (
                <ImageCard description={description} url={regular} key={id} />
            )
        }
    )
    return <div className="image-list">{imageElements}</div>
}

export default ImageList
