import React from 'react'
import ArticleBox from '../ArticleBox'

const MobilePost = () => {
    const styles = {
        main: {
            justifyContent: 'center'
        }
    }
    const texts = {
        articleTitle: "استقالة ألان بيفاني: نهاية انتفاضة مدير عام"
    }
    return (
        <div className="mobile-post">
            <div className="container">
                    <div className="mobile-inner">
                        <div className="col-md-6">
                            <ArticleBox 
                            imgSrc="images/post-mobile-2.jpg"
                            title={texts.articleTitle}
                            titleFontSize="10px"
                            innerInfoPadding="10px"
                            width="165px"/>
                        </div>
                        <div className="col-md-6">
                            <ArticleBox 
                            imgSrc="images/post-mobile-2.jpg"
                            title={texts.articleTitle}
                            titleFontSize="10px"
                            innerInfoPadding="10px"
                            width="165px"/>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default MobilePost
