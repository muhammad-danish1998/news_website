import React from 'react'
import ProfileContent2 from './ProfileContent2'

const LatestNewsSideBar = () => {
    const texts = {
        title: 'آخر الأخبار ',
        articleTitle: "1 دقيقة",
        articleText: "على حسان دياب أن يقلق. لقد خرج رجلان من مكتبه طوعاًً."
    }
    return (
        <div className="left-sidebar left-latest-news">
            <h3>
                {texts.title}       <span className="latest-more d-flex justify-content-end">المزيد  </span>                     

                            </h3>
            <ProfileContent2 
            title={texts.articleTitle}
            text={texts.articleText}/>
            <ProfileContent2 
            title={texts.articleTitle}
            text={texts.articleText}/>
            <ProfileContent2 
            title={texts.articleTitle}
            text={texts.articleText}/>
            <ProfileContent2 
            title={texts.articleTitle}
            text={texts.articleText}/>
            <ProfileContent2 
            title={texts.articleTitle}
            text={texts.articleText}/>
            <ProfileContent2 
            title={texts.articleTitle}
            text={texts.articleText}/>
        </div>
    )
}

export default LatestNewsSideBar;
