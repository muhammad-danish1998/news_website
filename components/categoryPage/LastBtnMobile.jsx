import React from 'react'

const LastBtnMobile = () => {
    const texts = {
        main: 'المزيد'
    }
    return (
        <div className="last-btn-mobile">
            <div className="container">
                <div className="row">
                    <div className="col-12">                        
                        <div className="more-last-main">
                            <a href="#" className="more-btn">{texts.main}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastBtnMobile
