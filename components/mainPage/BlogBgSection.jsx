import React from 'react'
import ArticleBox from '../ArticleBox'

const BlogBgSection = () => {
    const texts = {
        blogBtn: ' اخترنا لكم  ',
        articleTitle: "استقالة ألان بيفاني: نهاية انتفاضة مدير عام"
    }
    return (
        <div className="blog-bg-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="blog-bg-btn">
                            <a href="#">{texts.blogBtn}</a>
                        </div>
                    </div>
                    {[1, 2, 3, 4].map((n) => <div key={n} className="col-md-3 col-sm-12">
                        <ArticleBox 
                        imgSrc="images/blog-12.jpg"
                        title={texts.articleTitle}
                        titleFontSize="12px"
                        mode="dark"/>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default BlogBgSection
