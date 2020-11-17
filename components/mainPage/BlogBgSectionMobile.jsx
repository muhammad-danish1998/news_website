import React from 'react'
import ArticleBox from '../ArticleBox'

const BlogBgSectionMobile = () => {
  const classes = {
    carouselItem: `carousel-item`,
    carouselItemActive: "carousel-item active"
  }
  const texts = {
    blogBtn: ' اخترنا لكم ',
    articleTitle: "استقالة ألان بيفاني: نهاية انتفاضة مدير عام "
    
  }
  return (
    <div className="blog-bg-section mobile-screen-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="blog-bg-btn">
              <a href="#">{texts.blogBtn}</a>
            </div>
          </div>
          <div id="blog_slider" className="carousel slide"
          data-ride="carousel">
            <ul className="carousel-indicators">
              <li data-target="blog_slider" data-slide-to="0" className="active"></li>
              <li data-target="blog_slider" data-slide-to="1"></li>
              <li data-target="blog_slider" data-slide-to="2"></li>
            </ul>
            <div className="carousel-inner">
              {[1, 2, 3, 4].map((n) => <div key={n} className={
                n === 1 ? classes.carouselItemActive : classes.carouselItem}>
                <div className="col-md-3 col-sm-12">
                  <ArticleBox 
                  imgSrc="images/blog-9.jpg"
                  title={texts.articleTitle}
                  titleFontSize="12px"
                  mode="dark"/>
                </div>
              </div>)}
            </div>
            <a href="#demo" className="carousel-control-prev"
            data-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </a>
            <a href="#demo" className="carousel-control-next"
            data-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogBgSectionMobile
