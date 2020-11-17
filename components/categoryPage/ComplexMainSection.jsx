import React, {useState, useEffect} from 'react'
import ArticleBox from '../ArticleBox'

const ComplexMainSection = ({ articles }) => {
    const [width, setWidth] = useState(1920);

    useEffect(() => {
        window.onresize = () => setWidth(window.innerWidth);
    })

    const styles = {
        article: {
            marginBottom: '20px'
        }
    }
    const texts = {
        title: '  «كورونا» يضرب الطواقم الطبية والحكومة تراهن على «الخوف»',
        text: '  قبل نحو أسبوع، أصدر المُستشفى اللبناني الإيطالي في صور بياناً «اعترف» فيه بإصابة مريضَين من نزلائه وأحد المُمرّضين المخالطين بفيروس «كورونا»، مؤكداً أنه أجرى ...'
    }
    return (
        <div className="complex-main-sec">
            <div className="container">
                <div className="row">
                    {Array(6).fill(0).map((_, i) => 
                    <div className="col-4">
                        <ArticleBox 
                        style={styles.article}
                        imgSrc={`images/complex-img-4.jpg`}
                        title={articles[i]?.Headline || texts.title}
                        titleFontSize={width < 500 ? "9px" : "12px"}
                        text={width >= 500 && (articles[i]?.Summary || texts.text)}
                        innerInfoPadding={width < 500 ? '10px' : '15px'}
                        textFontSize="14px"/>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default ComplexMainSection
