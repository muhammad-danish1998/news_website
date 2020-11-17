import React from 'react'
import TopBtnSection from '../components/newsPage/TopBtnSection'
import DirectMainSection from '../components/newsPage/DirectMainSection'
import DirectorMainSection from '../components/newsPage/DirectorMainSection'
import LastSection from '../components/newsPage/LastSection'

const NewsPage = () => {
    return (
        <React.Fragment>
            <TopBtnSection />
            <DirectMainSection />
            <DirectorMainSection />
            <LastSection />
        </React.Fragment>
    )
}

export default NewsPage
