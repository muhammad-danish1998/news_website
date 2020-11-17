import React from 'react'

const TopBtnSection = () => {
  const texts = {
    mainLine: 'لبنان ',
    centerLine: 'سياسة ',
    rightHeading: 'فئة ٣ '
  }
  return (
    <div className="sikl-top-btn-main">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sikl-top-btn-inner">
              <a href="#">
                <p><span>
                  {texts.mainLine} <span className="main-line">|</span></span> <span className="left-heading">
                    {texts.centerLine} <span className="center-line">
                      |</span></span><span className="right-heading">
                        {texts.rightHeading} </span></p>
              </a>
              <span className="home-icon-main">
                <a href="https://al-akhbar.dev.pythagore.net/"><img src="/images/home-icon.png" /></a>
              </span>
            </div>
          </div>
        </div>
      </div>
	  </div>
  )
}

export default TopBtnSection
