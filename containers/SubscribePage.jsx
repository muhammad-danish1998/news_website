import React from 'react'
import SubscribeCart from '../components/subscribePage/SubscribeCart'

const SubscribePage = () => {
    const texts = {
        topHeading: ' اشترك في  ',
        topHeadingSpan: ' «الأخبار» ',
        subHeading: 'اشترك في نشرة ',
        subHeadingSpan: ' «الأخبار» ',
        subHeadingEnd: 'الإلكترونية  ',
        input1: 'الاسم الكامل  ',
        input2: 'البريد الالكتروني  ',
        submit: 'اشترك  ',
        mainHeading: ' اشترك في جريدة  ',
        mainHeadingSpan: ' «الأخبار» ',
        cartTitle: "باقة ١ ",
        cartOldPrice: '145,000',
        cartNewPrice1: ',100',
        cartNewPrice2: '000',
        cartBtnPlaceholder: 'اشترك  ',
        cartNewsInfo: 'لوريم ايبسوم دولار سيت أميت كونسيكتيتور أدايبا يسكينج أليايت,سيت  دو أيوسمود تي  ',
    }
    return (
        <div className="advertise-with-us">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="advertise-info">
                            <h3 className="top-heading">
                                {texts.topHeading}
                                <span>{texts.topHeadingSpan}</span>
                            </h3>
                            <h3>
                                {texts.subHeading}
                                <span>{texts.subHeadingSpan}</span>
                                {texts.subHeadingEnd}
                            </h3>
                            <form>
                                <div className="form-input-1">
                                    <div className="full-demo">
                                        <input type="text" id="fname" name="fname"/>
                                        <label>
                                            {texts.input1}
                                            <span>*</span>
                                        </label>
                                    </div>
                                    <div className="full-demo">
                                        <input type="text" id="fname" name="fname"/>
                                        <label>
                                            {texts.input2}
                                            <span>*</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="submit-btn">
                                    <input type="submit" value={texts.submit}/>
                                </div>
                            </form>
                            <h3>
                                {texts.mainHeading}
                                <span>{texts.mainHeadingSpan}</span>
                            </h3>
                            <div className="news-section">
                                <div className="row">
                                    {[1, 2, 3].map((_, i) => <SubscribeCart 
                                    key={i}
                                    className="col-md-4 news"
                                    title={texts.cartTitle}
                                    oldPrice={texts.cartOldPrice}
                                    newPrice1={texts.cartNewPrice1}
                                    newPrice2={texts.cartNewPrice2}
                                    newsPlaceholder={texts.cartBtnPlaceholder}
                                    newsInfo={texts.cartNewsInfo}/>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscribePage
