import React from 'react'

const LoginPage = () => {
    const texts = {
        header: 'تسجيل الدخول  ',
        info1: 'تسجيل الدخول  ',
        info2: 'عبر حساباتك على وسائل التواصل الإجتماعي   ',
        twitter: 'تسجيل الدخول عبر تويتر  ',
        facebook: 'تسجيل الدخول عبر فيسبوك   ',
        preForm: ' أو  ',
        nameLabel: 'الاسم  ',
        passwordLabel: 'كلمة المرور  ',
        submit: 'دخول  ',
        register1: 'ليس لديك حساب؟  ',
        register2: 'سجّل هنا  ',
        register3: 'نسيت كلمة المرور؟  ',
        register4: ' اضغط هنا  ',
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 heading">
                    <h4>{texts.header}</h4>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="login-info">
                        <p>{texts.info1}</p>
                        <p>{texts.info2}</p>
                        <div className="main-icon">
                            <a href="#" className="twitter-icon">
                                <i className="fab fa-twitter" aria-hidden="true"></i>
                                <span>{texts.twitter}</span>
                            </a>
                            <a href="https://akhbar.thewickfirm.com/connect/facebook" 
                            className="facebook-icon">
                                <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                <span>{texts.facebook}</span>
                            </a>
                            <a href="https://akhbar.thewickfirm.com/connect/google" 
                            className="facebook-icon">
                                <i className="fab fa-google" aria-hidden="true"></i>
                                <span>GOOGLE</span>
                            </a>
                        </div>
                        <div className="left-right-border">
                            <p>{texts.preForm}</p>
                        </div>
                        <div className="login-form">
                            <div className="full-demo user">
                                <input type="text" name="fname" id="fname"/>
                                <label>
                                    {texts.nameLabel}
                                    <span>*</span>
                                </label>
                            </div>
                            <div className="full-demo lock">
                                <input type="text" name="fname" id="fname"/>
                                <label>
                                    {texts.passwordLabel}
                                    <span>*</span>
                                </label>
                            </div>
                            <input type="submit" id="submit-btn" value={texts.submit}/>
                        </div>
                        <div className="register-here">
                            <span>{texts.register1}</span>
                            <a href="#">{texts.register2}</a>
                            .
                            <span>{texts.register3}</span>
                            <a href="#">{texts.register4}</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-2"></div>

            </div>
        </div>
    )
}

export default LoginPage
