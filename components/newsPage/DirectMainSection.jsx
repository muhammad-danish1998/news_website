import React from 'react'

const DirectMainSection = () => {
    const texts = {
        directBtn: ' مباشر ',
        southMainHeading: ' انفراج في أزمة المحروقات جنوباً: التحقيقات تدخل منشآت الزهراني',
        southSubHeading: '«انتفاضة» مشايخ عكار ضد دريان',
        share: ' شارك ',
    }
    return (
        <div className="direct-main-sec">
            <div className="container">
                <div className="direct-inner">
                    <div className="row">
                        <div className="col-12">
                            <div className="direct-btn-main">
                                <a href="#" className="direct-btn">
                                    {texts.directBtn}
                                </a>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="direct-img-main">
                                <a href="#">
                                    <img src="images/news-main.jpg"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="south-main-heading">
                                <h2>{texts.southMainHeading}</h2>
                                <a href="#" className="share-main">
                                    <div className="dead-share">
                                        <span>{texts.share}</span>
                                        <img src="images/Share icon gray.png"/>
                                    </div>
                                </a>
                            </div>
                            {Array(3).fill(0).map((_, i) => 
                            <div className="south-sub-heading">
                                <h3>{texts.southSubHeading}</h3>
                                <a href="#" className="share-main">
                                    <div className="dead-share">
                                        <span>{texts.share}</span>
                                        <img src="images/Share icon gray.png"/>
                                    </div>
                                </a>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DirectMainSection
