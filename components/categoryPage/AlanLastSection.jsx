import React from 'react'
import ArticleBox from '../ArticleBox'

const AlanLastSection = () => {
    const texts = {
        title: '  كذبة تهريب المازوت إلى سوريا',
        moreBtn: ' المزيد  ',
    }
    return (
        <div className="alan-last-sec-main">
            <div className="container">
                <div className="row">
                    {Array(4).fill(0).map((_, i) => 
                    <div className="col-3">
                        <ArticleBox 
                        imgSrc={`images/alan-img${i+1}.jpg`}
                        title={texts.title}
                        titleFontSize="12px"/>
                    </div>)}
                    <div className="col-12">
                        <div className="more-last-main">
                            <a href="#" className="more-btn">{texts.moreBtn}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlanLastSection
