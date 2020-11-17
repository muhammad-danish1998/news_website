import React from 'react'

const FormSection = () => {
    const styles = {
        main: {
            display: 'block !important'
        }
    }
    const texts = {
        header: 'اشترك في نشرة',
        headerLink: '«الأخبار»',
        input: "البريد الإلكتروني ",
        slider: ' أريد الاشتراك في نشرة «الأخبار» الإلكترونية  ',
        formBtn: 'اشترك  '

    }
    return (
        <div className="form-section" style={styles.main}>
            <div className="container">
                <div className="row">
                    <h3 className="form-heading">
                        {texts.header}
                        <a href="#">{texts.headerLink}</a>
                    </h3>
                </div>
                <div className="row form-inner-section">
                    <div className="col-md-4 col-sm-12">
                        <div className="form-field">
                            <input type="text" id="fname" name="fname" placeholder={texts.input} />
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-12">
                        <div className="switch-btn">
                            <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                            </label>
                            <span>{texts.slider}</span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="form-btn">
                            <a href="#">{texts.formBtn}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormSection
