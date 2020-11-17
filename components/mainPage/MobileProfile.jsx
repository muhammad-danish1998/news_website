import React from 'react'
import ProfileContent from './ProfileContent'

const MobileProfile = () => {
   const texts = {
      title: ' كتابنا  ',
      articleTitle: "إبراهيم الأمين",
      articleText: "على حسان دياب أن يقلق. لقد خرج رجلان من مكتبه طوعاًً." 

   }
    return (
        <div className="mobile-profile">
         <div className="container">
            <div className="row">
               <div className="left-sidebar">
                  <img className="quotes-img" src="images/quotes-1.png" />
                  <h3> كتابنا  </h3>
                  <ProfileContent
                  imgSrc="images/profile-1.png"
                  title={texts.articleTitle}
                  text={texts.articleText}
                  />
                  <ProfileContent
                  imgSrc="images/profile-1.png"
                  title={texts.articleTitle}
                  text={texts.articleText}
                  bordered
                  />
                  <ProfileContent
                  imgSrc="images/profile-1.png"
                  title={texts.articleTitle}
                  text={texts.articleText}
                  />
                  <ProfileContent
                  imgSrc="images/profile-1.png"
                  title={texts.articleTitle}
                  text={texts.articleText}
                  />
                  <ProfileContent
                  imgSrc="images/profile-1.png"
                  title={texts.articleTitle}
                  text={texts.articleText}
                  />
                  <ProfileContent
                  imgSrc="images/profile-1.png"
                  title={texts.articleTitle}
                  text={texts.articleText}
                  bordered
                  />
                  <ProfileContent
                  imgSrc="images/profile-1.png"
                  title={texts.articleTitle}
                  text={texts.articleText}
                  />
               </div>
            </div>
         </div>
      </div>
    )
}

export default MobileProfile
