import React from 'react'
import SocialSection from '../components/AkhbarVideo/SocialSection'
import VideoSection from '../components/AkhbarVideo/VideoSection'

const AkhbarVideo = () => {
    const texts = {
        titleSpan: ' لبنان   |    ',
        title: ' سياسة   |   فئة ٣ ',
    }
    return (
        <React.Fragment>
            <div className="sikl-top-btn-main">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sikl-top-btn-inner">
                                <a href="#">
                                    <p>
                                        <span>{texts.titleSpan}</span>
                                        {texts.title}
                                    </p>
                                </a>
                                <span className="home-icon-main">
                                    <a href="#">
                                        <img src="/images/home-icon.png"/>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SocialSection />
            <VideoSection />
        </React.Fragment>
    )
}

export default AkhbarVideo
