import React from 'react'
import ArticleBox from '../ArticleBox'

const DirectorMainSection = () => {
    const texts = {
        title: '  ألان بيفاني: نهاية انتفاضة مدير عام نهاية انتفاضة مدير عام  ألان بيفاني.'
    }
    return (
        <div className="director-main-sec">
            <div className="container">
                <div className="row">
                    {Array(3).fill(0).map((_, i) => 
                    <div className="col-4">
                        <ArticleBox 
                        imgSrc="images/director-img2.jpg"
                        title={texts.title}
                        titleFontSize="12px"/>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default DirectorMainSection
