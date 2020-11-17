import React from 'react'
import EconomyBox from './EconomyBox'

const ComplexMainSection = () => {
    const texts = {
        title: '  أزمة المحروقات: خطوة باتجاه رفع الدعم؟',
        text: ' أزمة المحروقات صارت أزمة بنيوية. المعاناة من جرائها أكبر من أن تحتمل. الدعم لا يذهب إلى مستحقيه بل إلى جيوب المستوردين والتجار، الذين يشترون المازوت، تحديداً، بالسعر المدعوم ويبيعونه في السوق... ',
        comment1: ' حسن علّيق ',
        comment2: ' | الثلاثاء 21 تموز 2020 ',
    }
    return (
        <div className='complex-main-sec'>
            <div className="container">
                <div className="row">
                    {Array(6).fill(0).map((_, i) => 
                    <div className="col-4">
                        <EconomyBox
                        imgSrc={`images/file-img1.jpg`}
                        title={texts.title}
                        text={texts.text}
                        comment1={texts.comment1}
                        comment2={texts.comment2} />
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default ComplexMainSection
