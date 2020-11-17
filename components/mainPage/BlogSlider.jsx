import React from 'react'
import ArticleBox from '../ArticleBox'

const BlogSlider = () => {
    const classes = {
        carouselItem: `carousel-item`,
        carouselItemActive: "carousel-item active"
    }
    const texts = {
        articleTitle: "ألان بيفاني: نهاية انتفاضة مدير عام نهاية انتفاضة مدير عام  ألان بيفاني."
    }
    return (
        <div id="blog_slider" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
            <li data-target="blog_slider" data-slide-to="0" className="active"></li>
            <li data-target="blog_slider" data-slide-to="1"></li>
            <li data-target="blog_slider" data-slide-to="2"></li>
        </ul>
        <div className="carousel-inner">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => <div key={n}
            className={n === 1 ? classes.carouselItemActive : classes.carouselItem}>
                <div className="col-md-3 col-sm-12">
                    <ArticleBox
                    imgSrc="images/blog-4.jpg"
                    title={texts.articleTitle}
                    titleFontSize="12px"/>
                </div>
            </div>)}
        </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
        <span className="carousel-control-next-icon"></span>
        </a>
        </div>
    )
}

export default BlogSlider;
