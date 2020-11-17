import React from 'react';

export default function Footer() {
  const styles = {
    quoteImg: {width: '50%'}
  }
  const texts = {
    menu1: 'أخبار',
    menu2: 'سياسة',
    menu3: 'مجتمع',
    menu4: 'اقتصاد',
    menu5: 'ثقافة وناس',
    menu6: 'ملفات',
    menu7: 'رأي',
    download1: 'حمّل تطبيق',
    download2: '«الأخبار»',
    openBtn: 'تواصل معنا ',
    formContainer: 'تواصل معنا',
    msgLabel: 'رسالة',
    msg: "اكتب رسالة ...",
    submitBtn: 'إرسال',
    cancelBtn: 'قريب',
    quotes: 'تواصل معنا',
    chartLineIcon: 'الأبرز ',
    circleIcon: 'مباشر',
    podcastIcon: 'بودكاست',
    playIcon: 'فيديو',
  }
  return (
    <React.Fragment>
      <div className="main-footer">
        <div className="container">

          <div className="footer-logo">
            <a href="https://al-akhbar.dev.pythagore.net/"><img src="/images/logo.png" /></a>
          </div>

          <div className="footer-menu">
            <ul>
              <li><a className="active" href="#">{texts.menu1} </a></li>
              <li><a href="#">{texts.menu2} </a></li>
              <li><a href="#">{texts.menu3} </a></li>
              <li><a href="#">{texts.menu4} </a></li>
              <li><a href="#">{texts.menu5} </a></li>
              <li><a href="#">{texts.menu6} </a></li>
              <li><a href="#">{texts.menu7} </a></li>
            </ul>
          </div>

          <div className="social-icon">
            <a target="_blank" href="https://www.youtube.com/channel/UCesINM73oox7GBSXTHz9Xiw"><i className="fab fa-youtube"></i></a>
            <a target="_blank" href="https://www.instagram.com/alakhbarnewspaper/"><i className="fab fa-instagram"></i></a>
            <a target="_blank" href="https://www.linkedin.com/company/al-akhbar/"><i className="fab fa-linkedin-in"></i></a>
            <a target="_blank" href="https://www.facebook.com/AlakhbarNews"><i className="fab fa-facebook-f"></i></a>
            <a target="_blank" href="https://twitter.com/AlakhbarNews"><i className="fab fa-twitter"></i></a>
          </div>

          <div className="download-section">
            <a href="#">{texts.download1} </a>
            <a href="#">{texts.download2} </a>
          </div>

          <div className="footer-icon">
            <a href="#"><img src="/images/footer-icon-2.png" /></a>
            <a href="#"><img src="/images/footer-icon-1.png" /></a>
          </div>

          {/* <div className="footer-main-icon">
            <div className="footer-bottom-icon">
              <button className="open-button">{texts.openBtn} </button>

              <div className="chat-popup" id="myForm">
                <form action="/action_page.php" className="form-container">
                  <h1>{texts.formContainer} </h1>

                  <label htmlFor="msg"><b>{texts.msgLabel} </b></label>
                  <textarea placeholder={texts.msg} name="msg" required></textarea>

                  <button type="submit" className="btn">{texts.submitBtn} </button>
                  <button type="button" className="btn cancel">{texts.cancelBtn} </button>
                </form>
              </div>
            </div>
          </div> */}

        </div>
      </div>


      <div className="bottom-footer">
        <div className="container">
          <div className="row">

            <div className="col-2">
              <i className="fas fa-chart-line"></i>
              <p>{texts.chartLineIcon} </p>
            </div>
            <div className="col-2">
              <i className="fas fa-circle"></i>
              <p>{texts.circleIcon} </p>
            </div>

            <div className="col-4">
              <div className="quote-img">
                <img style={styles.quoteImg} src="/images/quotes-1.png" />
              </div>
            </div>

            <div className="col-2">
              <i className="fas fa-podcast"></i>
              <p>{texts.podcastIcon} </p>
            </div>
            <div className="col-2">
              <i className="fas fa-play"></i>
              <p>{texts.playIcon} </p>
            </div>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
