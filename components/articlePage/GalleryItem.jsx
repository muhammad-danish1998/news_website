import React from 'react'
import PropTypes from 'prop-types'

const GalleryItem = (props) => {
    return (
        <div className="gallery-img-inner">
            <a href={props.href || '#'} className="gallery-img">
                <img src={props.imgSrc} />
            </a>
        </div>
    )
}

GalleryItem.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    href: PropTypes.string,
}

export default GalleryItem
