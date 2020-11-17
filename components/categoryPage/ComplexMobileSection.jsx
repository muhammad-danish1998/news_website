import React from 'react'
import ArticleBox from '../ArticleBox'

const ComplexMobileSection = () => {
    const texts = {
        title: '  «كورونا» يضرب الطواقم الطبية والحكومة تراهن على «الخوف»',
        text: '  قبل نحو أسبوع، أصدر المُستشفى اللبناني الإيطالي في صور بياناً «اعترف» فيه بإصابة مريضَين من نزلائه وأحد المُمرّضين المخالطين بفيروس «كورونا»، مؤكداً أنه أجرى ...'
    }
    return (
        <div className="complex-mobile-sec">
            <div className="complex-main-sec">
                <div className="container">
                    <div className="row">
                        {Array(6).fill(0).map((_, i) => 
                        <div className="col-4">
                            <ArticleBox 
                            imgSrc={`images/complex-img-4.jpg`}
                            title={texts.title}
                            innerInfoPadding="10px 10px 0 10px"
                            titleFontSize="9px"/>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComplexMobileSection
