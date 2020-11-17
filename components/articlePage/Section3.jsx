import React from 'react'
import ArticleBox from '../ArticleBox'
import ProfileContent3 from '../ProfileContent3'
import FormSidebar from '../FormSidebar'
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton,
FacebookMessengerShareButton, WhatsappShareButton, EmailShareButton  } from 'react-share';

import dynamic from "next/dynamic";

const FontSizeChanger = dynamic(() => import('react-font-size-changer'), { ssr: false });

const Section3 = ({ man, body, slug, related, tags, title }) => {
  const styles = {
    preProfile: {
      marginBottom: '30px',
      borderBottom: '1px solid #d7d7d7',
    },
    formTitle: {
      color: '#cb051a',
    },
    shareBtn: {
      background: '#e9e9e9',
      border: 'none',
      outline: 'none',
    },
  }


  // const btns = [
  //   ' أطبّاء ',
  //   ' كورونا ',
  //   ' الجامعة الأميركية ',
  //   ' طلاب ',
  //   ' طلاب ',
  //   ' طلاب ',
  //   ' طلاب ',
  //   ' طلاب ',
  //   ' طلاب ',
  // ]
  const texts = {
    man: man,
    otherText31: body,
    blogBgBtn: 'مقالات ذات صلة ',
    allBtn1: ' أطبّاء ',
    allBtn2: ' كورونا ',
    allBtn3: ' الجامعة الأميركية ',
    allBtn4: ' طلاب ',
    sideBarTitle: 'الأكثر قراءة',
    profileTitle: 'في انتظار الخراب الكبير: تآمر وتواطؤ... وصمت!',
    profileText: 'فلسطين',
    formText: 'اشترك في نشرة ',
    formTitle: '«الأخبار»',
    formPlaceholder: 'البريد الإلكتروني',
    formSwitch: 'أريد الاشتراك في نشرة «الأخبار» الإلكترونية ',
    formSubmit: 'اشترك',
  }
  return (

    <div className="section-3">

      <div className="container">
        <div className="row">
          <div className="col-8 main-1">
            <div className="part-2">
              <img src="/images/man.png"/>
              <h3>{texts.man}</h3>
            </div>
            <div className="mobile-main-sec">
              <div className="a-main-mobile">
             
                 <FontSizeChanger
          targets={['.part-5 p']}
          onChange={(element, newValue, oldValue) => {
            console.log(element, newValue, oldValue);
          }}
          options={{
            stepSize: 2,
            range: 3
          }}
          customButtons={{
            up: <span>A+</span>,
            down: <span>A-</span>,
        
          }}          
        />
              </div>
            </div>
            <div className="part-5 text-other">
                <p>{texts.otherText31}</p>
            </div>
            <div className="featured-product">
              <div className="row">
                <div className="col-md-12">
                  <div className="blog-bg-btn">
                      <a href="#">{texts.blogBgBtn}</a>
                  </div>
                </div>
                {(related.map((_, i) =>
                <div className="col-md-4 col-sm-12">
                  <ArticleBox
                  title={_.articleTitle}
                  titleFontSize="12px"
                  imgSrc="/images/blog-12.jpg"/>
                </div>))}
              </div>
            </div>
            <div className="part-6 social">
   <EmailShareButton  className="social-icon" subject={"Check this out" + title}
           body={"Sharing with you an article from Al-akhbar " + `https://al-akhbar-next.vercel.app/article/${slug}`} style={styles.shareBtn}>          <i  className="fa fa-link"></i>
              </EmailShareButton>
              <WhatsappShareButton
              url={`https://al-akhbar-next.vercel.app/article/${slug}`}
              className="social-icon" style={styles.shareBtn}>
          <i  className="fab fa-whatsapp"></i>
              </WhatsappShareButton>
              <FacebookMessengerShareButton appId={3731814870165093}
              url={`https://al-akhbar-next.vercel.app/article/${slug}`}
              className="social-icon" style={styles.shareBtn}>
          <i  className="fab fa-facebook-messenger"></i>
              </FacebookMessengerShareButton>
              <LinkedinShareButton
              className="social-icon"
              style={styles.shareBtn}
              url={`https://al-akhbar-next.vercel.app/article/${slug}`}>
          <i  className="fab fa-linkedin"></i>
              </LinkedinShareButton>
              <TwitterShareButton
              url={`https://al-akhbar-next.vercel.app/article/${slug}`}
              className="social-icon" style={styles.shareBtn}>
          <i  className="fab fa-twitter"></i>
              </TwitterShareButton>
              <FacebookShareButton url={`https://al-akhbar-next.vercel.app/article/${slug}`}
              style={styles.shareBtn}
              className="social-icon">
          <i  className="fab fa-facebook"></i>
              </FacebookShareButton>
            </div>
            <div className="part-7 all-btn">
              {tags.map(tag => <a href="#">
                <h3>{tag.Title}</h3>
              </a>)}
            </div>
          </div>
          <div className="col-4 sidebar-main-col">
            <div className="part-1 sidebar">
              <h2 style={styles.preProfile}>{texts.sideBarTitle}</h2>
              {Array(5).fill(0).map((_, i) => <ProfileContent3
              key={i}
              imgWidth="45%"
              paddingRight='15px'
              paddingTop="20px"
              paddingBottom="15px"
              imgSrc={`/images/sidebar-img-${i+1}.jpg`}
              title={texts.profileTitle}
              text={texts.profileText}
              noBorderBottom={i===4}
              />)}
            </div>
            <FormSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3
