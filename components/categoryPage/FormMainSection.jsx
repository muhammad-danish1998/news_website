import React from 'react'
import ArticleBox from '../ArticleBox'
import FormSidebar from '../FormSidebar'

const FormMainSection = () => {
    const texts = {
        title: '  ألان بيفاني: نهاية انتفاضة مدير عام نهاية انتفاضة مدير عام  ألان بيفاني.'
    }
    return (
        <div className="form-main-sec">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <ArticleBox 
                        imgSrc="images/form-img2.jpg"
                        title={texts.title}
                        titleFontSize="12px"/>
                    </div>
                    <div className="col-4">
                        <ArticleBox 
                        imgSrc="images/form-img2.jpg"
                        title={texts.title}
                        titleFontSize="12px"/>
                    </div>
                    <div className="col-4">
                        <FormSidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormMainSection
