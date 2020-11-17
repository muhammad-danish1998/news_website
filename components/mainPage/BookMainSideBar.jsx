import React from 'react'
import ProfileContent from './ProfileContent'

const BookMainSideBar = () => {
  const styles = {
    main: {
      paddingTop: '5px'
    }
  }
  const texts = {
    title: ' كتابنا  ',
    articleTitle: "بيار أبي صعب",
    articleText: "على حسان دياب أن يقلق. لقد خرج رجلان من مكتبه طوعاًً."
  }
  return (
    <div className="left-sidebar book-main" style={styles.main}>
      <img className="quotes-img" src="images/quotes-1.png" />
      <h3>{texts.title}</h3>
      <ProfileContent 
      imgSrc="/images/profile-1.png"
      title={texts.articleTitle}
      text={texts.articleText}/>
      <ProfileContent 
      bordered
      imgSrc="/images/profile-1.png"
      title={texts.articleTitle}
      text={texts.articleText}/>
      <ProfileContent 
      imgSrc="/images/profile-1.png"
      title={texts.articleTitle}
      text={texts.articleText}/>
      <ProfileContent 
      imgSrc="/images/profile-1.png"
      title={texts.articleTitle}
      text={texts.articleText}/>
      <ProfileContent 
      imgSrc="/images/profile-1.png"
      title={texts.articleTitle}
      text={texts.articleText}/>
      <ProfileContent 
      bordered
      imgSrc="/images/profile-1.png"
      title={texts.articleTitle}
      text={texts.articleText}/>
      <ProfileContent 
      imgSrc="/images/profile-1.png"
      title={texts.articleTitle}
      text={texts.articleText}/>
    </div>
  )
}

export default BookMainSideBar
