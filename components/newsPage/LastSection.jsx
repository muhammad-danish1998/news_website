import React from 'react'
import ArticleBox from '../ArticleBox'

const LastSection = () => {
    const styles = {
        main: {
            marginTop: '30px'
        }
    }
    const texts = {
        articleTitle: ' استقالة ألان بيفاني: نهاية انتفاضة مدير عام نهاية انتفاضة مدير عام',
    }
    return (
        <div className="alan-last-sec-main" style={styles.main}>
            <div className="container">
                <div className="row">
                    {Array(4).fill(0).map((_, i) => 
                    <div className="col-3">
                        <ArticleBox 
                        imgSrc={`images/uprising-img${i+1}.jpg`}
                        title={texts.articleTitle}
                        titleFontSize='12px' />
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default LastSection
