import React from 'react'
import Spinner from '../components/Spinner'
import { useFetch } from '../hooks/useFetch'

const TermsPage = () => {

    const { loading, texts } = useFetch('https://akhbar.thewickfirm.com/terms-and-conditions');

    if (loading) return (
        <Spinner />
    )

    return (
        <React.Fragment>
            <div className="policy-main-heading text-forming">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="policy-heading-inner">
                                <h3>{texts.TermsAndConditionsPlaceholder}</h3>
                            </div>
                            <div className="policy-text-main">
                                <p>{texts.TermsAndConditionsContent}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="policy-main-heading">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="policy-heading-inner title-main">
                                <h3>{texts.HeadingPlaceholder}</h3>
                            </div>
                            <div className="policy-text-main">
                                <p>{texts.HeadingContent}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="policy-main-heading last-title-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="policy-heading-inner title-main">
                                <h3>{texts.TitlePlaceholder}</h3>
                            </div>
                            <div className="policy-text-main">
                                <p>{texts.TitleContent}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TermsPage
