import React from 'react'
import ArticleBox from '../ArticleBox'

const BlogBgSection1 = () => {
    const texts = {
        articleTitle: "ألان بيفاني: نهاية انتفاضة مدير عام نهاية انتفاضة مدير عام  ألان بيفاني. "
    }
    return (
        <div className="blog-bg-section-1">
            <div className="container">
                <div className="row">
                    {[1, 2, 3].map((n) => <div className="col-md-4 col-sm-12" key={n}>
                        <ArticleBox 
                        imgSrc="images/blog-15.jpg"
                        title={texts.articleTitle}
                        titleFontSize="12px"/>
                    </div>)}
                    <div className="col-md-12"></div>
                    {[1, 2, 3].map((n) => <div className="col-md-4 col-sm-12" key={n}>
                        <ArticleBox 
                        imgSrc="images/blog-15.jpg"
                        title={texts.articleTitle}
                        titleFontSize="12px"/>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default BlogBgSection1
