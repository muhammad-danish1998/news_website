import React from 'react'

const SupplementPage = () => {
    const texts = {
        topBtnSpan: 'ملاحق |',
        topBtn: 'رأس المال ',
        sliderTitle: 'اندثار طريق الحرير',
        sliderSubTitle: 'وصعود الرأسـمالية',
        yearSpan: 'جورج سالم ',
        year: ' | الإثنين 20 تموز 2020',
        share: 'شارك ',
        supTitle: ' عدد ٣ ',
        supDesc: ' ألان بيفاني: نهاية انتفاضة مدير عام نهاية انتفاضة مدير عام. ',
        supYear: ' جورج سالم | الإثنين 20 تموز 20 ',
        supShare: ' شارك ',
        lastBtn: ' ملاحق سابقة ',
        selectOption: 'اختر العدد / التاريخ ',
        searchLine: ' أو ',
        searchPlaceholder: ' ابحث في المضمون ',
        searchLeft: ' ابحث ',
    }
    return (
        <React.Fragment>
            <div className="sikl-top-btn-main">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sikl-top-btn-inner">
                                <a href="#">
                                    <p>
                                        <span>{texts.topBtnSpan}</span>
                                        {texts.topBtn}
                                    </p>
                                </a>
                                <span className="home-icon-main">
                                    <a href="https://al-akhbar.dev.pythagore.net/"
                                    target="_blank">
                                        <img src="/images/home-icon.png"/>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slider-main-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-6 slider-text-col">
                            <div className="slider-main-text">
                                <h2>{texts.sliderTitle}</h2>
                                <h3>{texts.sliderSubTitle}</h3>
                                <p className="text-year">
                                    <span>{texts.yearSpan}</span>
                                    {texts.year}
                                </p>
                                <a href="#" className="share-main">
                                    <div className="banner-last-text">
                                        <p>{texts.share}</p>
                                        <img src="/images/Share icon.png"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-6 slider-img-col">
                            <img src="/images/Supplements banner image.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="supplements-second-sec">
                <div className="container">
                    <div className="row">
                        {[1, 2, 3, 4, 5, 6].map((_, i) => <div className="col-4"
                        key={i}>
                            <div className="dead-content">
                                <span>{texts.supTitle}</span>
                                <h4>{texts.supDesc}</h4>
                                <p>{texts.supYear}</p>
                                <a href="#" className="share-main">
                                    <div className="dead-share">
                                        <p>{texts.supShare}</p>
                                        <img src="/images/Share icon gray.png"/>
                                    </div>
                                </a>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
            <div className="previous-main-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="previous-btn-main">
                                <a href="#" className="previous-btn">
                                    {texts.lastBtn}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="search-main-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <select name="choose_option" id="choose_option">
                                {[1,2,3,4].map((_, i) => 
                                <option value={texts.selectOption}>
                                    {texts.selectOption}
                                </option>)}
                            </select>
                        </div>
                        <div className="col-1">
                            <p className="search-line">
                                {texts.searchLine}
                            </p>
                        </div>
                        <div className="col-5">
                            <div className="search-content">
                                <input type="text" placeholder={texts.searchPlaceholder}/>
                                <p>{texts.searchLeft}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SupplementPage
