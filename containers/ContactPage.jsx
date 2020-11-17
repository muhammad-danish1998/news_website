import React from 'react'
import AdvertiseForm from '../components/AdvertisePage/AdvertiseForm'
import Spinner from '../components/Spinner'
import { useFetch } from '../hooks/useFetch'

const ContactPage = () => {
    // const texts = {
    //     topHeading: 'تواصل معنا  ',
    //     iconInfo1: '759500 1 961+',
    //     iconInfo2: '759597 1 961+',
    //     iconInfo3: ' 113/5963',
    //     iconInfoEmail: ' ads@al-akhbar.com',
    //     location: ' بيروت ـ فردان، شارع دونان، سنتر كونكورد، الطابق السادس  ',
    //     bottomInfo: 'إذا كنت ترغب بالكتابة معنا، ',
    //     bottomInfoSpan: 'اضغط هنا. ',
    //     bottomText: ' أو ارسل رسالة  ',
    // }
    
    const { loading, texts } = useFetch('https://akhbar.thewickfirm.com/contact-us');

    if (loading) return (
        <Spinner />
    )

    return (
        <div className='advertise-with-us'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="advertise-info">
                            <h3 className="top-heading">
                                {texts.ConnectWithUs}
                            </h3>
                            <p className="icon-info">
                                <a href="#">
                                    <i className="fas fa-phone" aria-hidden="true"></i>
                                    {texts.PhoneNumber1}
                                </a>
                            </p>
                            <p className="icon-info">
                                <a href="#">
                                    <i className="fas fa-fax" aria-hidden="true"></i>
                                    {texts.PhoneNumber2}
                                </a>
                            </p>
                            <p className="icon-info">
                                <a href="#">
                                    <i className="fas fa-wallet" aria-hidden="true"></i>
                                    {texts.DoorNo}
                                </a>
                            </p>
                            <p className="icon-info">
                                <a href="#">
                                    <i className="fas fa-envelope" aria-hidden="true"></i>
                                    {texts.Email}
                                </a>
                            </p>
                            <p className="icon-info location">
                                <a href="#">
                                    <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                                    {texts.Address}
                                </a>
                            </p>
                            <p className="bottom-info">
                                {texts.Body}
                                {/* <span>{texts.bottomInfoSpan}</span> */}
                            </p>
                            <h3>{texts.ConnectWithUsPlaceholder}</h3>
                            <AdvertiseForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
