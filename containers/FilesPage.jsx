import React from 'react'
import TopBtnSection from '../components/newsPage/TopBtnSection'
import FilesBannerSection from '../components/filesPage/FilesBannerSection';
import TopInfoSection from '../components/filesPage/TopInfoSection';
import ComplexMainSection from '../components/filesPage/ComplexMainSection';
import PreviousMainSection from '../components/filesPage/PreviousMainSection';

const FilesPage = () => {
    const headtext = 'ملفّات ';
    return (
        <React.Fragment>
            <TopBtnSection text={headtext}/>
            <FilesBannerSection />
            <TopInfoSection />
            <ComplexMainSection />
            <PreviousMainSection />
        </React.Fragment>
    )
}

export default FilesPage
