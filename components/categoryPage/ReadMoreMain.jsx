import React, { useState, useEffect } from 'react'
import ArticleBox from '../ArticleBox'

const ReadMoreMain = () => {
    const texts = {
        rightTitle: ' ألان بيفاني: نهاية انتفاضة مدير عام نهاية انتفاضة مدير عام.',
        leftHeading: 'الأكثر قراءة ',
        leftText: 'فلسطين  ',
        leftTitle: 'في انتظار الخراب الكبير: تآمر وتواطؤ... وصمت!  ',
    }
    const [width, setWidth] = useState(1920);

    useEffect(() => {
        window.onresize = () => setWidth(window.innerWidth);
    })
    return (
        <div className="read-more-main">
            <div className="container">
                <div className="row">
                    <div className="col-8 read-more-right-main">
                        {Array(4).fill(0).map((_, i) => 
                        <div className="read-left-single-col">
                            <ArticleBox
                            display="vertical"
                            title={texts.rightTitle}
                            titleFontSize={width < 500 ? "10px" : "15px"}
                            imgWidth={width < 500 ? "60%" : ''}
                            imgSrc={`images/read-more-${i+1}.jpg`}/>
                        </div>)}
                    </div>
                    <div className="col-4 read-more-left-main">
                        <div className="heading-left-main">
                            <h3>{texts.leftHeading}</h3>
                            {Array(5).fill(0).map((_, i) => 
                            <div className="palestine-main">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="profile-img">
                                            <img src="images/left-post-1.jpg"/>
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="profile-info">
                                            <h4>{texts.leftText}</h4>
                                            <p>{texts.leftTitle}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReadMoreMain
