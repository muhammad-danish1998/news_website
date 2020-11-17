import React from 'react'
import ArticleBox from '../ArticleBox'
import AudioBox from '../AudioBox'
import AudioSocialMedia from './AudioSocialMedia'
import ProfileContent2 from './ProfileContent2'
import ProfileContent3 from '../ProfileContent3'

const AudioSection = (props) => {
    const styles = {
        articleBox: {
            marginBottom: '25px'
        }
    }
    const texts = {
        articleRightTitle: 'في انتظار الخراب الكبير: تآمر وتواطؤ... وصمت! ',
        articleRightText: 'على حسان دياب أن يقلق. لقد خرج رجلان من مكتبه طوعاً أو غصباً أو دفعاً. لكنهما خرجا محبطين من العجز مك طوعاً أو غصباً أو دفعاً. لكنهما خرجا محبطين من العجز...',
        articleMainTitle: 'ألان بيفاني: نهاية انتفاضة مدير عام نهاية انتفاضة مدير عام. ',
        articleMainLink: "فلسطين  ",
        articleLeftTitle: "في انتظار الخراب الكبير: تآمر وتواطؤ... وصمت!  ",
        audioTitle: "في انتظار الخراب الكبير: تآمر وتواطؤ... وصمت!",
        audioText: "فلسطين  ",
        audioHeader: "الأكثر قراءة "

    }
    return (
        <div className="audio-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="audio-heading-section">
                            <a href="#">{props.title}</a>
                            <p>{props.subtitle}</p>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <div className="right-audio-section">
                            <ArticleBox
                            imgSrc="images/right-post-1.jpg"
                            title={texts.articleRightTitle}
                            text={texts.articleRightText}
                            titleFontSize="16px"
                            textFontSize="15px"
                            innerInfoPadding="20px"
                            style={styles.articleBox}/>
                        </div>
                        <div className="main-audio-section">
                            {[1, 2, 3, 4].map((n) => <ArticleBox
                            key={n}
                            style={{marginBottom: '15px'}}
                            imgSrc="images/right-post-2.jpg"
                            title={texts.articleMainTitle}
                            display="vertical"
                            covered={n===2}
                            innerInfoPadding="25px"
                            titleFontSize="14px"
                            linkText={texts.articleMainLink}/>)}
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="left-audio-section">
                            <div className="top-audio-section">
                                <h3>بودكاست   </h3>
                                <AudioBox 
                                imgSrc="images/audio-img-1.jpg"
                                audioSrc="https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3"
                                title={texts.articleLeftTitle}/>
                                <AudioBox 
                                imgSrc="images/audio-img-1.jpg"
                                audioSrc="https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3"
                                title={texts.articleLeftTitle}/>
                            </div>
                            <AudioSocialMedia />
                            <div className="audio-post-section">
                                <h3>{texts.audioHeader}</h3>
                                {[1, 2, 3, 4, 5, 6].map((n) => <ProfileContent3
                                key={n}
                                imgSrc="images/left-post-2.jpg"
                                title={texts.audioTitle}
                                text={texts.audioText}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default AudioSection
