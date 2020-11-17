import React from 'react'
import PropTypes from 'prop-types'

const MusicBox = (props) => {
    const texts = {
        share: ' شارك   ',
    }
    return (
        <div className="economy-main-sec">
            <div className="img-detail">
                <a href="#">
                    <img src={props.imgSrc}/>
                </a>
            </div>
            <div className="content-detail">
                <h3>{props.title}</h3>
                <p>
                    {props.smallText}
                </p>
                <audio controls>
                    <source src={props.musicSrc}
                    type="audio/mpeg"/>
                </audio>
                <a href="#" className="dead-share-main">
                    <div className="dead-share">
                        <span>{texts.share}</span>
                        <img src="images/Share icon white.png"/>
                    </div>
                </a>
            </div>
        </div>
    )
}

MusicBox.propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    smallText: PropTypes.string,
    musicSrc: PropTypes.string,
}

export default MusicBox
