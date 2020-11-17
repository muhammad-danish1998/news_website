import React, { useState } from 'react'
import TopBtnSection from '../components/newsPage/TopBtnSection'
import ClassTabMain from '../components/podcastPage/ClassTabMain';
import TabContent from '../components/podcastPage/TabContent';

const PodcastPage = () => {
    const headtext = " بودكاست  ";
    const [tab, setTab] = useState(1);
    let image;
    if (tab === 1) {
        image = "images/podcast-img-8.jpg";
    } else if (tab === 2) {
        image = "images/podcast-img-7.jpg";
    } else {
        image = "images/podcast-img-6.jpg"
    }
    return (
        <React.Fragment>
            <TopBtnSection text={headtext}/>
            <ClassTabMain tab={tab} setTab={setTab}/>
            <div className="tab-content-main">
                <div className="container">
                    <div className="tabs-inner-content">
                        <TabContent imgSrc={image}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PodcastPage
