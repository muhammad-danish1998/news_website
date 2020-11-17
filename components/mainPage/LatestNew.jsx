import React from 'react'
import PropTypes from 'prop-types'

const LatestNew = props => {
    return (
        <div className="profile-content">
            <div className="profile-info">
                <h4>{props.time}</h4>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

LatestNew.propTypes = {
    time: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default LatestNew
