import React from 'react'

const WriteArticlePage = () => {
  const texts = {
    title: ' اكتب مقالك   ',
    input1: 'اسم الكاتب ',
    inputOption: ' الفئة * ',
    demo1: 'عنوان المقال ',
    textarea: 'المقال ',
    pictureMain: ' إضافة صورة',
    imageMain: ' اختر صورة',
    submit: ' ارسل ',
  }
  return (
    <React.Fragment>
      <div className="article-heading-main">
        <div className="container">
          <div className="write-heading-inner">
            <h3>{texts.title}</h3>
          </div>
          <div className="article-from-main">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <form className='article-from-inner'
                  id="articleform">
                    <div className="form-input-first">
                      <div className="full-demo">
                        <input type="text" id="fname" name="fname"/>
                        <label>
                          {texts.input1}
                          <span>*</span>
                        </label>
                      </div>
                      <div className="select-option">
                        <select name="category" id="category"
                        required>
                          <option>{texts.inputOption}</option>
                          <option value="category-1">Category 1</option>
                          <option value="category-2">Category 2</option>
                          <option value="category-3">Category 3</option>
                          <option value="category-4">Category 4</option>
                        </select>
                      </div>
                    </div>
                    <div className="full-demo demo-1">
                      <input type="text" id="fname" name="fname"/>
                      <label>
                        {texts.demo1}
                        <span>*</span>
                      </label>
                    </div>
                    <div className='full-demo textarea'>
                      <textarea name="fname" id="fname"></textarea>
                      <label>
                        {texts.textarea}
                        <span>*</span>
                      </label>
                    </div>
                    <div className="choose-btn-main">
                      <label className="picture-main">
                        {texts.pictureMain}
                        <input type="file" size="60"/>
                      </label>
                      <label className="image-main">
                        {texts.imageMain}
                        <input type="file" size="60"/>
                      </label>
                    </div>
                    <div className='submit-btn-main'>
                      <button type="submit" className="submit-btn">
                        {texts.submit}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default WriteArticlePage
