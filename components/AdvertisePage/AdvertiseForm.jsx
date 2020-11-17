import React from 'react'

const AdvertiseForm = () => {
    const texts = {
        text1: ' الاسم الكامل  ',
        text2: 'اسم الشركة ',
        text3: 'لبريد الالكتروني  ',
        text4: 'تأكيد البريد الالكتروني  ',
        text5: 'رمز المنطقة ',
        text6: 'رقم الهاتف / الموبايل  ',
        textArea: 'الموضوع  ',
        submit: 'ارسل ',
    }
    return (
        <form>
            <div className="form-input-1">
                <div className="full-demo">
                    <input type="text" name="fname" id="fname"/>
                    <label>
                        {texts.text1}
                        <span>*</span>
                    </label>
                </div>
                <div className="full-demo">
                    <input type="text" name="fname" id="fname"/>
                    <label>
                        {texts.text2}
                        <span>*</span>
                    </label>
                </div>
            </div>
            <div className="form-input-1">
                <div className="full-demo">
                    <input type="text" name="fname" id="fname"/>
                    <label>
                        {texts.text3}
                        <span>*</span>
                    </label>
                </div>
                <div className="full-demo">
                    <input type="text" name="fname" id="fname"/>
                    <label>
                        {texts.text4}
                        <span>*</span>
                    </label>
                </div>
            </div>
            <div className="form-input-1">
                <div className="full-demo">
                    <input type="text" name="fname" id="fname"/>
                    <label>
                        {texts.text5}
                    </label>
                </div>
                <div className="full-demo">
                    <input type="text" name="fname" id="fname"/>
                    <label>
                        {texts.text6}
                        <span>*</span>
                    </label>
                </div>
            </div>
            <div className="full-demo textarea">
                <textarea name="fname" id="fname" rows="4"></textarea>
                <label>
                    {texts.textArea}
                    <span>*</span>
                </label>
            </div>
            <div className="submit-btn">
                <input type="submit" value={texts.submit}/>
            </div>
        </form>
    )
}

export default AdvertiseForm
