import React from 'react';
import PropTypes from 'prop-types';
import ReactFlowPlayer from 'react-flow-player';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton,
  FacebookMessengerShareButton, WhatsappShareButton } from 'react-share';

const ArticleBox = (props) => {
  const mode = props.mode || 'light';
  const linkText = props.linkText || 'عنوان ٤ '
  let bgColor;
  switch (mode) {
    case 'light': bgColor = '#f8f8f8'; break ;
    case 'dark': bgColor = '#282828'; break;
    case 'black': bgColor = 'black'; break;
  }
  const display = props.display || 'horizontal';
  const quotes = props.quotes;

  const image = props.video ?
  <ReactFlowPlayer 
  playerInitScript="https://releases.flowplayer.org/7.2.4/flowplayer.min.js"
  playerId="reactFlowPlayer"
  poster={props.poster}
  sources={[
    {
      type: props.videoType || 'application/x-mpegurl',
      src: props.videoSrc || 
      'https://s3.amazonaws.com/favadb-hls/8fd9634bddf7f5303e35/5fea217230c60100b371.m3u8'
    }
  ]}/> :
  <img src={props.imgSrc}/>

  const classes = {
    articleBox: `article-box ${props.className || ''} ${props.display==="vertical" ? 
    'vertical-article' : ''}`,
  }
  const styles = {
    articleBox: {
      textAlign: "right",
    
      ...props.style
    },
    articleImage: {
      width: display === 'horizontal' ? '100%' : props.imgWidth || '35%',
      height: props.imgHeight || 'auto',
    },
    innerInfo: {
      padding: props.innerInfoPadding,
      marginTop: props.imageFullHeight ? props.innerInfoMarginTop || '-120px' : '',
      position: props.imageFullHeight ? 'absolute' : 'block',
    },
    title: {
      padding: props.textPadding,
      lineHeight: props.lineHeight || '26px',
      fontSize: props.titleFontSize,
      color: props.imageFullHeight || (mode === 'white'
      || mode === 'dark') ? 'white' : 'black',
    },
    text: {
      padding: props.textPadding,
      fontSize: props.textFontSize,
      color: props.imageFullHeight || (mode === 'white'
      || mode === 'dark') ? 'white' : 'black'
    },
    articleQuote: {
      color: props.imageFullHeight || (mode === 'black'
      || mode === 'dark') ? 'black' : 'black',
      fontSize: props.textFontSize,
      padding: `${props.quotesPadding || '13px'} 0`,
    },
    lastArticleQuote: {
      color: props.imageFullHeight || (mode === 'black'
      || mode === 'dark') ? 'black' : 'black',
      fontSize: props.textFontSize,
      padding: `${props.quotesPadding || '13px'} 0`,
      borderBottom: 'none',
    },
    quoteImg: {
      marginLeft: '5px'
    },
    share: {
      backgroundColor: props.imageFullHeight || (mode === 'white'
      || mode === 'dark') ? 'transparent' : 'white',
      color: props.imageFullHeight || (mode === 'white'
      || mode === 'dark') ? 'white' : 'black',
    },
    playCircle: {
      position: 'absolute',
      zIndex: 1,
      padding: '15px',
      fontSize: '24px',
      color: '#cb051a',
      right: 0,
    }
  }
  const texts = {
    share: ' شارك',
    cover: ' اختبار  ',
  }

  return (
    <div className={classes.articleBox} style={styles.articleBox}>
    { /* {props.headText && <h2 className="article-header">
        <i className="fas fa-circle blink_dot" aria-hidden="true"></i>
        {props.headText}
        </h2>}*/}
      <div className="article-image" style={styles.articleImage}>
        {image}
        {props.playCircle && <i style={styles.playCircle}
        className="fas fa-play-circle" aria-hidden="true"></i> }
        {props.covered && <div className="test-main">
          <div>
            <a href="#">
              {texts.cover}
            </a>
          </div>
          </div>}
        <div className="book-btn">
          <a href={props.articleHref || '#'}>{linkText}</a>
        </div>
      </div>
      <div className="inner-info" style={styles.innerInfo}>
        <h3 style={styles.title}>{props.title}</h3>
        {props.text && <span className="desc-span" style={styles.text}>
          {props.text}</span>}
  




          <div className="btn_wrap dead-share" style={styles.share}>
            <span>{texts.share}</span>
        <img src="/images/Share icon gray.png" />                             

        <div className="container" >
            <i style={styles.share} className="fab fa-facebook-f"></i>
            <i style={styles.share}  className="fab fa-twitter"></i>
            <i style={styles.share}  className="fab fa-instagram"></i>
            <i style={styles.share}  class="fab fa-whatsapp"></i>
            <i style={styles.share}  class="fab fa-facebook-messenger"></i>
            <i style={styles.share}  class="fab fa-linkedin"></i>

        </div>
    </div>

        {quotes && <div className="article-quotes">
          {quotes.map((quote, i) =>
            <p className="article-quote" key={quote} style={i === quotes.length - 1 ? 
              styles.lastArticleQuote : styles.articleQuote}>
              <img src="/images/quotes-1.png" className="quotes-img" style={styles.quoteImg}/>
              {quote}
            </p>)}
        </div>}
      </div>
    </div>
  )
}

ArticleBox.propTypes = {
  covered: PropTypes.bool,
  textPadding: PropTypes.string,
  imgHeight: PropTypes.string,
  imgWidth: PropTypes.string,
  lineHeight: PropTypes.string,
  headText: PropTypes.string,
  playCircle: PropTypes.bool,
  video: PropTypes.bool,
  videoType: PropTypes.string,
  videoSrc: PropTypes.string,
  poster: PropTypes.string,
  linkText: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  display: PropTypes.oneOf(['horizontal', 'vertical']),
  articleHref: PropTypes.string,
  shareHref: PropTypes.string,
  imgSrc: PropTypes.string,
  imageFullHeight: PropTypes.bool,
  innerInfoMarginTop: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleFontSize: PropTypes.string.isRequired,
  textFontSize: PropTypes.string,
  text: PropTypes.string,
  mode: PropTypes.oneOf(['light', 'dark', 'black']),
  quotes: PropTypes.arrayOf(PropTypes.string),
  quotesPadding: PropTypes.string,
  innerInfoPadding: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
}

export default ArticleBox;