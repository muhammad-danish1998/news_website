import React from 'react'
import MusicBox from './MusicBox'

const TabContent = (props) => {
    const styles = {
        main: {
            display: 'block'
        }
    }
    const texts = {
        titleBig: '  اقتراح التعديل الوزاري يتقدّم...',
        titleBigRed: ' وباسيل الأكثر حماسة؟',
        share1: 'شارك  ',
        share2: ' اشترك  ',
        articleTitle: '	ألان بيفاني: نهاية انتفاضة مدير عام نهاية انتفاضة مدير عام  ألان بيفاني.',
        articleSmall: '  الإثنين 20 تموز 2020',
        btn: ' المزيد  ',
    }
    return (
        <div className="tabcontent" style={styles.main}>
            <div className="row">
                <div className="col-12">
                    <div className="class-1-inner-main">
                        <h2>{texts.titleBig}</h2>
                        <h3>{texts.titleBigRed}</h3>
                        <audio controls>
                            <source src="https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3"
                            type="audio/mpeg"/>
                        </audio>
                        <div className="tab-btn-main">
                            <a href="#" className="share-main">
                                <p>{texts.share1}</p>
                                <img src="images/Share icon white.png"/>
                            </a>
                            <a href="#">{texts.share2}</a>
                        </div>
                    </div>
                </div>
                {Array(6).fill(0).map((_, i) => 
                <div className="col-4">
                    <MusicBox 
                    imgSrc={props.imgSrc}
                    musicSrc="https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3"
                    title={texts.articleTitle}
                    smallText={texts.articleSmall}
                    />
                </div>)}
                <div className="col-12 podcast-btn-more">
                    <div className="more-last-main">
                        <a href="#" className="more-btn">{texts.btn}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabContent
