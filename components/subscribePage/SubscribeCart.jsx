import React from 'react'
import PropTypes from 'prop-types'

const SubscribeCart = (props) => {
    return (
        <div className={props.className || ''}>
            <h2>
                {props.title}
            </h2>
            <price>
                <span>{props.oldPrice}</span>
                <span>.L.L</span>
            </price>
            <div className="bg-price">
                <p>
                    <sup>
                        <span>{props.newPrice2}</span>
                        <span>.L.L</span>
                    </sup>
                    <sub>{props.newPrice1} </sub>
                </p>
            </div>
            <a href="#" className="news-btn">
                {props.newsPlaceholder}
            </a>
            <p className="news-info">
                {props.newsInfo}
            </p>
            <a href="#" className="add-icon">
                <i className="fas fa-plus"></i>
            </a>
        </div>
    )
}

SubscribeCart.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    oldPrice: PropTypes.string.isRequired,
    newPrice1: PropTypes.string.isRequired,
    newPrice2: PropTypes.string.isRequired,
    newsPlaceholder: PropTypes.string.isRequired,
    newsInfo: PropTypes.string.isRequired,
}

export default SubscribeCart
