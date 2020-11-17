import React from 'react'

const WhatsAppSection = () => {
    const texts = {
        h3: 'اشترك في خدمة الواتس اب   '
    }
    return (
        <div className="whatsapp-section">
            <div className="container">
                <div className="row">
                    <div className="whatsapp-inner">
                        <img src="images/whatsapp-img.png"/>
                        <h3>{texts.h3}</h3>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default WhatsAppSection
