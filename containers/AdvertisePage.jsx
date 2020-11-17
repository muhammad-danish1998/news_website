import React, { useEffect, useState } from 'react'
import AdvertiseForm from '../components/AdvertisePage/AdvertiseForm';

const REQUEST_API = 'https://akhbar.thewickfirm.com/advertise-with-us';

const AdvertisePage = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const infoPlaceholder = 'للتواصل مع قسم الإعلانات - جريدة  ';
    const infoSpan = ' «الأخبار» ';
    console.log(data);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(REQUEST_API, { method: 'GET' }).then(res => res.json());
            setData(res);
            setLoading(false);
        }
        fetchData();
    }, []);


    if (loading || !data) return <React.Fragment>
        Loading...
    </React.Fragment>
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="advertise-info">
                            <h3 className="top-heading">{data.AdvertiseWithUsPlaceholder}</h3>
                            <p className="top-info">{data.AdvertiseWithUsContent}</p>
                            <h3>
                                {infoPlaceholder}
                                <span>{infoSpan}</span>
                            </h3>
                            <p className="icon-info">
                                <i className="fas fa-phone" aria-hidden="true"></i>
                                {data.PhoneNumber}
                            </p>
                            <p className="icon-info">
                                <i className="fas fa-envelope" aria-hidden="true"></i>
                                {data.Email}
                            </p>
                            <p className="icon-info">
                                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                                {data.Address}
                            </p>
                            <AdvertiseForm />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AdvertisePage
