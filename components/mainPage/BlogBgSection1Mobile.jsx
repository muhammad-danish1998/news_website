import React from 'react'
import ArticleBox from '../ArticleBox'


const BlogBgSection1Mobile = () => {
    const texts = {
        articleTitle: "ألان بيفاني: نهاية انتفاضة مدير عام نهاية انتفاضة مدير عام  ألان بيفاني. "
    }
    return (
        <div className="blog-bg-section-1 mobile-blog-bg-section">
            <div className="container">
                <div className="row">
                    {[1, 2, 3, 4].map((n) => <div className="col-md-4 col-sm-12" key={n}>
                        <ArticleBox
                        imgSrc="images/blog-15.jpg"
                        title={texts.articleTitle}
                        titleFontSize="10px"
                        display="vertical"/>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default BlogBgSection1Mobile
