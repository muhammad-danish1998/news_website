import React from 'react';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton,
  FacebookMessengerShareButton, WhatsappShareButton, EmailShareButton } from 'react-share';

const Section2 = ({ column1, column2, slug }) => {
  const texts = {
    column1,
    column2,
    column3: 'شارك'
  }
  const styles = {
    shareBtn: {
      border: 'none',
      outline: 'none',
    },
  }
  return (
    <section className="section-2">
      <div className="container all-column">
        <div className="column-1">
          <h2>{texts.column1} </h2>
        </div>
        <div className="column-2">
          <p>{texts.column2} </p>
        </div>
        <div className="column-3 shareIconsHolder">
          <h3>{texts.column3} </h3>
          <EmailShareButton subject={"Check this out" + texts.column1}
           body={"Sharing with you an article from Al-akhbar " + `https://al-akhbar-next.vercel.app/article/${slug}`} style={styles.shareBtn}>
          <i  className="fa fa-link"></i>
          </EmailShareButton>
          <WhatsappShareButton
          url={`https://al-akhbar-next.vercel.app/article/${slug}`}
          style={styles.shareBtn}>
          <i  className="fab fa-whatsapp"></i>
          </WhatsappShareButton>
          <FacebookMessengerShareButton appId={3731814870165093}
          style={styles.shareBtn}
          url={`https://al-akhbar-next.vercel.app/article/${slug}`}>
          <i  className="fab fa-facebook-messenger"></i>
          </FacebookMessengerShareButton>
          <LinkedinShareButton
          style={styles.shareBtn}
          url={`https://al-akhbar-next.vercel.app/article/${slug}`}>
          <i  className="fab fa-linkedin"></i>
          </LinkedinShareButton>
          <TwitterShareButton
          style={styles.shareBtn}
          url={`https://al-akhbar-next.vercel.app/article/${slug}`} >
          <i  className="fab fa-twitter"></i>
          </TwitterShareButton>
          <FacebookShareButton url={`https://al-akhbar-next.vercel.app/article/${slug}`}
          style={styles.shareBtn}>
          <i  className="fab fa-facebook"></i>
          </FacebookShareButton>
        </div>
      </div>
	  </section>
  )
}

export default Section2
