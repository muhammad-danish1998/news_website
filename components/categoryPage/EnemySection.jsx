import React from 'react'
import ArticleBox from '../ArticleBox'
import AudioSocialMedia from '../mainPage/AudioSocialMedia'

const EnemySection = ({ articles }) => {
    const styles = {
        big: {
            marginBottom: '20px'
        }
    }
    const texts = {
        media: ' تابعونا ',
        bigTitle: articles[0]?.Headline || '  حزب الله ينعى شهيداً قتله العدو في سوريا: قلق وغموض في اسرائيل',
        bigText:  articles[0]?.Summary || ' على حسان دياب أن يقلق. لقد خرج رجلان من مكتبه طوعاً أو غصباً أو دفعاً. لكنهما خرجا محبطين من العجز مكتبه طوعاً أو غصباً أو دفعاً. لكنهما خرجا محبطين من العجز...',
        articleTitle: articles[1]?.Headline || '  اعتصام «رمزي» للأساتذة والأطباء: تهديدات إدارة «الأميركية» تطوّق التحـرّكات   ',
        articleText: articles[1]?.Summary || '  أثناء اعتصام المصروفين أمام مدخل مستشفى الجامعة الأميركيّة (شارع القاهرة)، ظهر أمس، كان أساتذة وأطباء ينفّذون اعتصاماً آخر...'
    }
    return (
        <div className="enemy-main-sec">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <ArticleBox
                        style={styles.big}
                        imgSrc={'images/policy-img-right.jpg'}
                        height="530px"
                        innerInfoPadding="15px"
                        textPadding="10px 0 20px 0"
                        title={texts.bigTitle}
                        titleFontSize={'16px'}
                        text={texts.bigText}
                        articleHref={`/article/${articles[0]?.Slugline}`}
                        textFontSize={'18px'}/>
                    </div>
                    <div className="col-4">
                        <div className="sidebar-main">
                            <div className="sidebar-heading">
                                <div className="heading-left-main">
                                    <h3>{texts.media}</h3>
                                </div>
                                <div className='social-icon-sidebar'>
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
                            </div>
                            <ArticleBox 
                            imgSrc="images/economy-img.jpg"
                            title={texts.articleTitle}
                            titleFontSize="12px"
                            text={texts.articleText}
                            textFontSize="14px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnemySection
