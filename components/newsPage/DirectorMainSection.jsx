import React from 'react'
import ArticleBox from '../ArticleBox'

const DirectorMainSection = () => {
    const styles = {
        firstArticles: {
            marginBottom: '30px'
        }
    }
    const texts = {
        articleTitle: ' ألان بيفاني: نهاية انتفاضة مدير عام نهاية انتفاضة مدير عام ألان بيفاني.',
    }
    return (
        <div className="director-main-sec">
            <div className="container">
                <div className="row">
                    {Array(6).fill(0).map((_, i) => 
                    <div className="col-4">
                        <ArticleBox 
                        imgSrc={`images/direct-img${(i % 4) + 1}.jpg`}
                        title={texts.articleTitle}
                        style={i < 3 ? styles.firstArticles : {}}
                        innerInfoPadding='30px 15px'
                        titleFontSize='12px' />
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default DirectorMainSection
