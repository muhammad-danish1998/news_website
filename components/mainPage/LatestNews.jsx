import React from 'react'
import LatestNew from './LatestNew'

const LatestNews = () => {
  const texts = {
    title: ' آخر الأخبار ',
    articleTitle: "على حسان دياب أن يقلق. لقد خرج رجلان من مكتبه طوعاًً.  لقد خرج رجلان من مكتبه طوعاًً"
  }
  return (
    <div className="left-sidebar left-latest-news mobile-left-scroll">
      <h3>{texts.title}</h3>
      <div className="mobile-scroll">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <LatestNew 
        key={n}
        time="11.28"
        text={texts.articleTitle}/>)}
      </div>
    </div>
  )
}

export default LatestNews
