import React from 'react';
import BlogSlider from './BlogSlider';
import LatestNews from './LatestNews';
import BookMainSideBar from './BookMainSideBar';
import LatestNewsSideBar from './LatestNewsSideBar';
import ArticleBox from '../ArticleBox';

const OurBook = () => {
  const styles = {
    article1: {marginBottom: '15px'},
    article2: {marginBottom: '30px'},
  }
  const texts = {
    articleTitle1: "في انتظار الخراب الكبير: تآمر وتواطؤ... وصمت! تآمر وتواطؤ... وصمت!",
    articleTitle2: "استقالة ألان بيفاني: نهاية انتفاضة مدير عام نهاية انتفاضة مدير عام",
    articleTitleLatest: "في انتظار الخراب الكبير: تآمر وتواطؤ... وصمت!تآمر وتواطؤ... وصمت!",
    articleText: "على حسان دياب أن يقلق. لقد خرج رجلان من مكتبه طوعاً أو غصباً أو دفعاً. لكنهما خرجا محبطين من العجز. عندما يخرج أحمد جشي وألان بيفاني ...",
    articleQuotes: [
      'استقالة بيفاني في ميزان «معركة توزيع الخسائر»',
      'استقالة بيفاني: العصابة تنتصر',
    ],
    headText: ' مباشر  ',
  }
  return (
    <div className="our-book">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <div className="right-sidebar">
              <div className="row">
                <div className="col-md-7">
                  <ArticleBox 
                  mode="black"
                  imgSrc="images/news-1.jpg"
                  title={texts.articleTitle1}
                  quotes={texts.articleQuotes}
                  headText={texts.headText}
                  titleFontSize="12px"
                  textFontSize="14px"/>
                </div>
                <div className="col-md-5">
                  <ArticleBox
                  style={styles.article1}
                  imgSrc="images/news-2.jpg"
                  title={texts.articleTitle2}
                  titleFontSize="12px"
                  />
                  <ArticleBox 
                  imgSrc="images/news-2.jpg"
                  title={texts.articleTitle2}
                  titleFontSize="12px"
                  />
                </div>
              </div>
            </div>
            <div className="right-sidebar right-latest-news">
              <div className="row">
                <div className="col-md-5">
                  <ArticleBox 
                  style={styles.article2}
                  imgSrc="images/news-4.png"
                  title={texts.articleTitleLatest}
                  titleFontSize="11px"
                  imageFullHeight/>
                  <ArticleBox
                  style={styles.article2}
                  imgSrc="images/news-4.png"
                  title={texts.articleTitleLatest}
                  titleFontSize="11px"
                  imageFullHeight/>
                  <ArticleBox 
                  imgSrc="images/news-4.png"
                  title={texts.articleTitleLatest}
                  titleFontSize="11px"
                  imageFullHeight/>
                </div>
                <div className="col-md-7">
                  <ArticleBox 
                  imgSrc="images/news-3.jpg"
                  height="704px"
                  lineHeight="36px"
                  imgHeight="340px"
                  title={texts.articleTitle1}
                  titleFontSize="16px"
                  textFontSize="16px"
                  text={texts.articleText}
                  quotes={texts.articleQuotes}/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <BlogSlider />
            <LatestNews />
            <BookMainSideBar />
            <LatestNewsSideBar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurBook;
