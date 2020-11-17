import React from 'react'
import PropTypes from 'prop-types'

const EconomyBox = (props) => {
    const texts = {
        share: ' شارك ',
    }
    return (
        <div className="economy-main-sec">
            <div className="img-detail">
                <a href="#">
                    <img src={props.imgSrc} alt=""/>
                </a>
            </div>
            <div className="content-detail">
                <p className="comment-main">
                    <span>{props.comment1}</span>
                    {props.comment2}
                </p>
                <h3>
                    {props.title}
                </h3>
                <p>
                    {props.text}
                </p>
                <a href="#" className="share-main">
                    <div className="dead-share">
                        <span>{texts.share}</span>
                        <img src="images/Share icon gray.png"/>
                    </div>
                </a>
            </div>
        </div>
    )
}

EconomyBox.propTypes = {
    imgSrc: PropTypes.string,
    comment1: PropTypes.string,
    comment2: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
}

export default EconomyBox
