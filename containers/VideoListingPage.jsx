import React from 'react'
import ArticleBox from '../components/ArticleBox'
import FormSidebar from '../components/FormSidebar'

const VideoListingPage = () => {
    const texts = {
        topBtn: ' فيديو ',
        videoTitle: ' «كورونا»: بدأ «السيناريو السيئ»؟',
        videoText: ' مع إعلان مستشفى رفيق الحريري أمس بلوغه طاقته الاستيعابية القصوى وعدم قدرته على استقبال مصابين جدد، يبدو كأننا دخلنا في «السيناريو السيّئ»، .. ',
        mainTitle: ' ألان بيفاني: نهاية انتفاضة مدير عام نهاية انتفاضة مدير عام  ألان بيفاني.',
        headingLeftMain: ' تابعونا ',
        sidebar1: ' الأكثر مشاهدة  ',
        sidebarArticleTitle: ' في انتظار الخراب الكبير: تآمر وتواطؤ... وصمت!  ',
        directorTitle: '  ألان بيفاني: نهاية انتفاضة مدير عام نهاية انتفاضة مدير عام  ألان بيفاني.',
        lastTitle: ' كذبة تهريب المازوت إلى سوريا',
        economyBtn: 'عاقتصاد  ',

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
            <section className="section-3">
                <div className="container">
                    <div className="row">
                        <div className="col-8 main-1">
                            <ArticleBox
                            video
                            videoSrc="/images/videoplayback.mp4"
                            poster="/images/listing-video-img.jpg"
                            title={texts.videoTitle}
                            titleFontSize="16px"
                            text={texts.videoText}
                            textFontSize="16px"
                            videoType={'video/mp4'}
                            style={{
                                marginBottom: '30px'
                            }}
                            />
                            <div className="general-main-sec">
                                <div className="row">
                                    {[1,2].map((i) => 
                                    <div className="col-6">
                                        <ArticleBox 
                                        playCircle
                                        imgSrc={`/images/general-img${i}.jpg`}
                                        title={texts.mainTitle}
                                        titleFontSize="12px"/>
                                    </div>)}
                                </div>
                            </div>
                        </div>
                        <div className="col-4 main-2">
                            <div className="sidebar-heading">
                                <div className="heading-left-main">
                                    <h3>{texts.headingLeftMain}</h3>
                                </div>
                                <div className="social-icon-sidebar">
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-tiktok"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="part-1 sidebar"
                            style={{
                                marginTop: 0,
                            }}>
                                <h2>
                                    {texts.sidebar1}
                                </h2>
                                {[1,2,3,4,5].map(i => 
                                <div className="row img-center">
                                    <div className="col-4">
                                        <a href="#">
                                            <img src={`/images/sidebar-img-${i}.jpg`}/>
                                            <i className="fas fa-play-circle"
                                            aria-hidden="true"></i>
                                        </a>
                                        <div className='economy-btn'
                                        style={{
                                            display: 'block'
                                        }}>
                                            <a href="#" className="economy-btn-text">
                                                {texts.economyBtn}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-8 side-detail">
                                        <a href="#">
                                            <h3
                                            style={{
                                                fontSize: '10px'
                                            }}>{texts.sidebarArticleTitle}</h3>
                                        </a>
                                    </div>
                                </div>)}
                            </div>
                            <FormSidebar />
                        </div>
                    </div>
                </div>
            </section>
            <div className="director-main-sec" style={{
                marginTop: '40px',
                marginBottom: '20px'
            }}>
                <div className="container">
                    <div className="row">
                        {[1,2,3].map(i => 
                        <div className="col-4">
                            <ArticleBox 
                            playCircle
                            imgSrc="/images/listing-page-image.jpg"
                            title={texts.directorTitle}
                            titleFontSize="12px"/>
                        </div>)}
                    </div>
                </div>
            </div>
            <div className="alan-last-sec-main">
                <div className="container">
                    <div className="row">
                        {[1,2,3,4].map(i => 
                        <div className="col-3">
                            <ArticleBox 
                            playCircle
                            imgSrc={`images/Listing-img${i <= 3 ? i : 1}.jpg`}
                            title={texts.lastTitle}
                            titleFontSize={'9px'}/>
                        </div>)}
                    </div>
                </div>
            </div>
            <div className="alan-last-sec-main">
                <div className="container">
                    <div className="row">
                        {[1,2,3,4].map(i => 
                        <div className="col-3">
                            <ArticleBox 
                            playCircle
                            imgSrc={`images/Listing-img${i <= 3 ? i : 1}.jpg`}
                            title={texts.lastTitle}
                            titleFontSize={'9px'}/>
                        </div>)}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default VideoListingPage
