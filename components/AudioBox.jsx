import React from 'react'
import PropTypes from 'prop-types'

const AudioBox = (props) => {
    const texts = {
        share: ' شارك'
    }
    return (
        <div className="main-top-audio">
            <div className="row inner-audio">
                <div className="col-md-4">
                    <img src={props.imgSrc}/>
                </div>
                <div className="col-md-8">
                    <p>{props.title}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 audio-mp3">
                    <audio controls>
                        <source 
                        type="audio/mpeg"
                        src={props.audioSrc}/>
                    </audio>
                </div>
            </div>
            <a href="#">
                <div className="dead-share">
                    <span>{texts.share}</span>
                    <img src="images/Share icon gray.png"/>
                </div>
            </a>
        </div>
    )
}

AudioBox.propTypes = {
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    audioSrc: PropTypes.string.isRequired,
}

export default AudioBox
