import React from 'react'

const ClassTabMain = (props) => {
    const texts = {
        tab1: ' فئة ٣ ',
        tab2: ' فئة ٢ ',
        tab3: ' فئة ١ ',
    }
    return (
        <div className="class-tab-main">
            <div className="container">
                <div className="tab">
                    <button className={`tablinks ${props.tab === 1 ? 'active' : ''}`}
                    onClick={e => props.setTab(1)}>
                        {texts.tab1}
                    </button>
                    <button className={`tablinks ${props.tab === 2 ? 'active' : ''}`}
                    onClick={e => props.setTab(2)}>
                        {texts.tab2}
                    </button>
                    <button className={`tablinks ${props.tab === 3 ? 'active' : ''}`}
                    onClick={e => props.setTab(3)}>
                        {texts.tab3}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ClassTabMain
