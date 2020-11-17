import React, { useState } from 'react'
import ArticleBox from '../ArticleBox'
import VideoBox from './VideoBox'

const video = {
    imgSrc: "images/video-img-4.jpg",
    title: "في انتظار الخراب الكبير: تآمر وتواطؤ... وصمت!  "
};

const videos = [
    [video, video, video, video],
    [video, video, video],
    [video, video, video, video],
    [video, video, video],
    [video, video, video, video],
    [video, video, video],
]

const VideoSection = () => {
    const [id, setId] = useState(0);
    console.log(id);

    const styles = {
        tabsContent: {
            marginTop: '20px'
        }
    }

    const texts = {
        bgBtnDesktop: 'اخترنا لكم ',
        bgBtnMobile: 'فيديو',
        articleTitle: "في انتظار الخراب الكبير: تآمر وتواطؤ... وصمت! ",
        articleText: " على حسان دياب أن يقلق. لقد خرج رجلان من مكتبه طوعاً أو غصباً أو دفعاً. لكنهما خرجا محبطين من العجز.  ... ",
        tab1: ' فئة ١ ',
        tab2: 'فئة ٢  ',
        tab3: 'فئة ٣  ',
        tab4: 'فئة ٤ ',
        tab5: 'فئة ٥ ',
        tab6: 'فئة ٦ '
    }
    return (
        <div className="video-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="post-bg-btn desktop">
                            <a href="#">{texts.bgBtnDesktop} </a>
                        </div>
                        <div className="post-bg-btn mobile">
                            <a href="#">{texts.bgBtnMobile} </a>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-12">
                        <ArticleBox 
                        video
                        videoSrc="https://s3.amazonaws.com/favadb-hls/8fd9634bddf7f5303e35/5fea217230c60100b371.m3u8"
                        title={texts.articleTitle}
                        titleFontSize="15px"
                        text={texts.articleText}
                        textFontSize="14px"
                        mode="black"/>
                    </div>
                    <div className="col-md-5 col-sm-12">
                        <div className="tab">
                            <button className={`tablinks ${id===0 ? 'active' : ''}`}
                            onClick={() => setId(0)}>
                            {texts.tab1}
                            </button>
                            <button className={`tablinks ${id===1 ? 'active' : ''}`}
                            onClick={() => setId(1)}>
                            {texts.tab2}
                            </button>
                            <button className={`tablinks ${id===2 ? 'active' : ''}`}
                            onClick={() => setId(2)}>
                            {texts.tab3}
                            </button>
                            <button className={`tablinks ${id===3 ? 'active' : ''}`}
                            onClick={() => setId(3)}>
                            {texts.tab4}
                            </button>
                            <button className={`tablinks ${id===4 ? 'active' : ''}`}
                            onClick={() => setId(4)}>
                            {texts.tab5}
                            </button>
                            <button className={`tablinks ${id===5 ? 'active' : ''}`}
                            onClick={() => setId(5)}>
                            {texts.tab6}
                            </button>
                        </div>
                        <div className="tabs-inner-content" style={styles.tabsContent}>
                            {videos[id].map((vid, i) => <React.Fragment key={i}>
                                <VideoBox {...vid}/>
                                <hr/>
                            </React.Fragment>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoSection
