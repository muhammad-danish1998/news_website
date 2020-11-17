import React from 'react'

const FilesBannerSection = () => {
    const texts = {
        main: 'المازوت جنوباً كثير... في السوق السوداء ',
    }
    return (
        <div className="files-banner-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>{texts.main}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilesBannerSection
