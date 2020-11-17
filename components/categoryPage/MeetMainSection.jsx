import React from 'react'
import ArticleBox from '../ArticleBox'

const MeetMainSection = () => {
    const styles = {
        share: {
            backgroundColor: 'transparent'
        }
    }
    const texts = {
        title: " لودريان قد يلتقي حزب الله...",
        titleRed: 'وخطة فرنسية لمساعدة لبنان؟',
        meetBtn: "فئة ١ ",
        share: ' شارك   ', 
    }
    return (
        <div className="meet-main-sec">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="meet-content">
                            <a href="#" className="meet-btn">{texts.meetBtn}</a>
                            <h2>{texts.title}</h2>
                            <h3>{texts.titleRed}</h3>
                            <a href="#" className="meet-share">
                                <div className="dead-share" style={styles.share}>
                                    <span>{texts.share}</span>
                                    <img src="images/Share icon gray.png"/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeetMainSection
