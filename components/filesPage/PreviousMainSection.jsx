import React from 'react'

const PreviousMainSection = () => {
    const texts = {
        title: ' ملفات سابقة',
        date1: ' ٢٠ تموز 2020',
        date2: '١٩ تموز 2020 ',
        date3: '١٨ تموز 2020 ',
        date4: '١٧ تموز 2020',
    }
    return (
        <div class="previous-main-sec">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="previous-btn"> <a href="#">{texts.title} </a> </div>
                    </div>
                    <div class="col-3">
                        <div class="date-main"> <a href="#">{texts.date1} </a> </div>
                    </div>
                    <div class="col-3">
                        <div class="date-main"> <a href="#">{texts.date2} </a> </div>
                    </div>
                    <div class="col-3">
                        <div class="date-main"> <a href="#">{texts.date3} </a> </div>
                    </div>
                    <div class="col-3">
                        <div class="date-main"> <a href="#">{texts.date4} </a> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreviousMainSection
