import React from 'react'
import TopBtnSection from '../components/newsPage/TopBtnSection';
import EnemySection from '../components/categoryPage/EnemySection';
import ComplexMainSection from '../components/categoryPage/ComplexMainSection';
import MeetMainSection from '../components/categoryPage/MeetMainSection';
import ReadMoreMain from '../components/categoryPage/ReadMoreMain';
import DirectorMainSection from '../components/categoryPage/DirectorMainSection';
import FormMainSection from '../components/categoryPage/FormMainSection';
import AlanLastSection from '../components/categoryPage/AlanLastSection';
import WhatsAppSection from '../components/mainPage/WhatsAppSection';
import ComplexMobileSection from '../components/categoryPage/ComplexMobileSection';
import LastBtnMobile from '../components/categoryPage/LastBtnMobile';
import FormSection from '../components/categoryPage/FormSection';
import Spinner from '../components/Spinner'
import { useFetch } from '../hooks/useFetch';

const CategoryPage = () => {
    const headtext = 'أخبار  ';
    const { loading, texts } = useFetch(
        'https://akhbar.thewickfirm.com/sections/5f805510d15cdf32859bf57c');
    console.log(texts);
    if (loading) return <Spinner />
    Array.prototype.slice()
    return (
        <React.Fragment>
            <TopBtnSection text={texts.Title}/>
            <EnemySection articles={texts.Article.slice(0, 2)}/>
            <ComplexMainSection articles={texts.Article.slice(2, 8)}/>
            <MeetMainSection />
            <ReadMoreMain />
            <WhatsAppSection />
            <ComplexMobileSection />
            <LastBtnMobile />
            <FormSection />
            <DirectorMainSection />
            {/* ChooseMainSection */}
            <FormMainSection />
            <AlanLastSection />
        </React.Fragment>
    )
}

export default CategoryPage
