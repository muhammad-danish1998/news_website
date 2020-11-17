import React from 'react'
import ArticleBox from '../components/ArticleBox'

const TagsPage = () => {
    const texts = {
        topBtn: 'عناوين  ',
        topBtnSpan: 'كورونا ',
        tagsBtn: 'فئة ١ ',
        bannerInfo: ' عدّاد كورونا يتجاوز الـ400 إصابة اليوم و60 مليون دولار لمكافحة كورونا: الحكومة أمام اختبار تجهيز المستـشفيات',
        bannerShare: 'شارك  ',
        postTitle: ' واشنطن تشتري لُقاح «كورونا» من ألمانيا!',
        lastBtn: 'المزيد ',
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
                                        {texts.topBtn}
                                        <span className="center-line">|</span>
                                        <span>{texts.topBtnSpan}</span>
                                        
                                    </p>
                                </a>
                                <span className="home-icon-main">
                                    <a href="https://al-akhbar.dev.pythagore.net/"
                                    target="_blank">
                                        <img src="/images/home-icon.png"/>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tags-banner-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ArticleBox 
                            imgSrc="images/tags-banner.jpg"
                            title={texts.bannerInfo}
                            titleFontSize="14px"
                            linkText={texts.tagsBtn}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tags-banner-section tags-post-section">
                <div className="container">
                    <div className="row">
                        {[1, 2, 3].map((i) => 
                        <div className="col-md-4">
                            <ArticleBox 
                            imgSrc={`images/tag-post-${i}.jpg`}
                            title={texts.postTitle}
                            linkText={texts.tagsBtn}
                            titleFontSize="14px"/>
                        </div>)}
                        <div className="col-md-12 post-space"></div>
                        {[4, 5, 6].map((i) => 
                        <div className="col-md-4">
                            <ArticleBox 
                            imgSrc={`images/tag-post-${i}.jpg`}
                            title={texts.postTitle}
                            linkText={texts.tagsBtn}
                            titleFontSize="14px"/>
                        </div>)}
                        <div className="col-md-12 post-space"></div>
                        {[7, 8, 9].map((i) => 
                        <div className="col-md-4">
                            <ArticleBox 
                            imgSrc={`images/tag-post-${i}.jpg`}
                            title={texts.postTitle}
                            linkText={texts.tagsBtn}
                            titleFontSize="14px"/>
                        </div>)}
                    </div>
                </div>
            </div>
            <div className="tag-button">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <a href="#">{texts.lastBtn}</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TagsPage
