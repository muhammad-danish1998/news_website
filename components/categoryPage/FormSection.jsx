import React from 'react'

const FormSection = () => {
    const texts = {
        heading: 'اشترك في نشرة',
        headingLink: '«الأخبار»',
        fieldPlaceholder: "البريد الإلكتروني ",
        switchSpan: ' أريد الاشتراك في نشرة «الأخبار» الإلكترونية ',
        lastLink: 'اشترك  ',
    }
    return (
        <div className="form-section">
            <div className="container">
                <div className="row">
                <h3 className="form-heading">{texts.heading}<a href="#">{texts.headingLink}</a></h3>
                </div>
                <div className="row form-inner-section">
                <div className="col-md-4 col-sm-12">
                    <div className="form-field">
                        <input type="text" id="fname" 
                        name="fname" placeholder={texts.fieldPlaceholder} />
                    </div>
                </div>
                <div className="col-md-5 col-sm-12">
                    <div className="switch-btn">
                        <label className="switch">
                            <input type="checkbox" checked />
                            <span className="slider round"></span>
                        </label>
                        <span>{texts.switchSpan}</span>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12">
                    <div className="form-btn">
                        <a href="#">{texts.lastLink}</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default FormSection
