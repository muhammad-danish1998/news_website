import React from 'react'

const SocialSection = () => {
    const texts = {
        title: 'العمل في المصارف لم يعُد يجتذب الطلاب: وداعاً لاختصاص الـ Banking',
        year: 'الثلاثاء 21 تموز 2020 ',
        social: 'شارك',
    }
    return (
        <section className="section-2">
            <div className="container all-column">
                <div className="column-1">
                    <h2>{texts.title}</h2>
                </div>
                <div className="column-2">
                    <p>{texts.year}</p>
                </div>
                <div className="column-3">
                    {texts.social}
                    <a href="#">
                        <img src="/images/link.png"/>
                    </a>
                    <a href="#">
                        <img src="/images/whatsapp.png"/>
                    </a>
                    <a href="#">
                        <img src="/images/messenger.png"/>
                    </a>
                    <a href="#">
                        <img src="/images/linkedin.png"/>
                    </a>
                    <a href="#">
                        <img src="/images/twitter.png"/>
                    </a>
                    <a href="#">
                        <img src="/images/facebook.png"/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default SocialSection
