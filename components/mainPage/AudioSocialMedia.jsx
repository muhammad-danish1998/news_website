import React from 'react'

const AudioSocialMedia = () => {
    const texts = {
        title: 'تابعونا'
    }
    return (
        <div className="social-media">
            <h3>{texts.title}</h3>
            <a href="#">
                <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="#">
                <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="#">
                <i className="fab fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="#">
                <i className="fab fa-linkedin-in" aria-hidden="true"></i>
            </a>
            <a href="#">
                <i className="fab fa-tiktok" aria-hidden="true"></i>
            </a>
            <a href="#">
                <i className="fab fa-youtube" aria-hidden="true"></i>
            </a>
        </div>
    )
}

export default AudioSocialMedia
