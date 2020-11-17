import React from 'react'
import ArticleBox from '../ArticleBox'

const SubBanner2 = () => {
    const texts = {
        topBtn: 'المزيد  ',
        images1: 'في انتظار الخراب الكبير: تآمر وتواطؤ... وصمت!  ',
        images2: 'على حسان دياب أن يقلق. لقد خرج رجلان من مكتبه طوعاً أو غصباً أو دفعاً. لكنهما خرجا محبطين من العجز.  ... ',
        share: 'شارك',
        bottomBtn: 'عنوان ٤ ',
    }
    return (
        <div className="sub-banner-section-1 mobile-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sub-inner-banner">
                            <a href="#" className="top-btn">عالم  </a>
                            <h3>{texts.topBtn} </h3>
                            <div className="images-section">
                                <br />
                                <br />
                                <h4>{texts.images1} </h4>
                                <p>{texts.images2} </p>
                                <a href="#">
                                    <div className="dead-share">
                                        <span>{texts.share} </span>
                                        <img src="images/Share icon gray.png"/>
                                    </div>
                                </a>
                            </div>
                            <div className="bottom-btn">
                                <a href="#">{texts.bottomBtn}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubBanner2
