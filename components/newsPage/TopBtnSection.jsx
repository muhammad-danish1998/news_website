import React from 'react'

const TopBtnSection = (props) => {
  const texts = {
    main: props.text || ' أخبار '
  }
  return (
    <div className="sikl-top-btn-main">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sikl-top-btn-inner">
              <a href="#">
                <p>{texts.main}</p>
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
