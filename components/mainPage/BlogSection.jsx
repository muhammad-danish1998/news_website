import React from 'react'
import ArticleBox from '../ArticleBox'

const BlogSection = () => {
    const texts = {
        articleTitle: "ألان بيفاني: نهاية انتفاضة مدير عام نهاية انتفاضة مدير عام ألان بيفاني.",
        articleText: "على حسان دياب أن يقلق. لقد خرج رجلان من مكتبه طوعاً أو غصباً أو دفعاً..."
    }
    return (
        <div className="blog-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <ArticleBox 
                        imgSrc="images/blog-8.jpg"
                        title={texts.articleTitle}
                        text={texts.articleText}
                        titleFontSize="12px"
                        textFontSize="13px"
                        />
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <ArticleBox 
                        imgSrc="images/blog-8.jpg"
                        title={texts.articleTitle}
                        text={texts.articleText}
                        titleFontSize="12px"
                        textFontSize="13px"
                        />
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <ArticleBox 
                        imgSrc="images/blog-8.jpg"
                        title={texts.articleTitle}
                        text={texts.articleText}
                        titleFontSize="12px"
                        textFontSize="13px"
                        />
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <ArticleBox 
                        imgSrc="images/blog-8.jpg"
                        title={texts.articleTitle}
                        text={texts.articleText}
                        titleFontSize="12px"
                        textFontSize="13px"
                        />
                    </div>
                    <div className="col-md-12"></div>
                    <div className="col-md-3 col-sm-12">
                        <ArticleBox 
                        imgSrc="images/blog-8.jpg"
                        title={texts.articleTitle}
                        text={texts.articleText}
                        titleFontSize="12px"
                        textFontSize="13px"
                        />
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <ArticleBox 
                        imgSrc="images/blog-8.jpg"
                        title={texts.articleTitle}
                        text={texts.articleText}
                        titleFontSize="12px"
                        textFontSize="13px"
                        />
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <ArticleBox 
                        imgSrc="images/blog-8.jpg"
                        title={texts.articleTitle}
                        text={texts.articleText}
                        titleFontSize="12px"
                        textFontSize="13px"
                        />
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <ArticleBox 
                        imgSrc="images/blog-8.jpg"
                        title={texts.articleTitle}
                        text={texts.articleText}
                        titleFontSize="12px"
                        textFontSize="13px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSection
