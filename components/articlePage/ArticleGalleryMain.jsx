import React from 'react'
import GalleryItem from './GalleryItem'
import Carousel from 'react-bootstrap/Carousel'

const ArticleGalleryMain = () => {
  const styles = {
    carouselItem: {
      width: '100%',
    }
  }
  return (
    <div className="article-gallery-main">
      <div className="container">
        <div className="row">
          {(new Array(12).fill(0)).map((_, i) =>
          <div className="col-3">
            <GalleryItem imgSrc={`/images/Gallery-img${i+1}.jpg`}/>
          </div>)}
          <div className="col-12 mobile-slider">
            <div className="carousel-inner">
              <Carousel interval={3000}>
                {Array(12).fill(0).map((_, i) => <Carousel.Item>
                  <img src={`/images/Gallery-img${i+1}.jpg`}
                  style={styles.carouselItem}/>
                </Carousel.Item>
                )}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleGalleryMain
