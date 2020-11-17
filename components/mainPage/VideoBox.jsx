import React from 'react'
import PropTypes from 'prop-types'

const VideoBox = (props) => {
    const styles = {
        main: {display: 'flex'},
        btn: {
            position: 'absolute',
            bottom: '13px',
            left: '15px',
        }
    }
    const texts = {
        btn: 'أوروبا'
    }
    return (
        <div className="video-box" style={styles.main}>
            <div className="col-md-4 main-video">
                <img src={props.imgSrc}/>
                <div className="video-btn">
                    <p>
                        <a href="#">
                            <i className="fas fa-play-circle" aria-hidden="true"></i>
                        </a>
                    </p>
                    <p>
                        <a href="#" className="btn"
                        style={styles.btn}>{texts.btn}</a>
                    </p>
                </div>
            </div>
            <div className="col-md-8 main-info">
                <h3>{props.title}</h3>
            </div>
        </div>
    )
}

VideoBox.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default VideoBox
