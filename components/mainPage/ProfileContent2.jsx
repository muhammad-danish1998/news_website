import React from 'react'
import PropTypes from 'prop-types'

const ProfileContent2 = props => {
    return (
        <div className="profile-content">
            <div className="profile-info">
                <h4>{props.title}</h4>
                <p>
                    {props.text}
                </p>
            </div>
        </div>
    )
}

ProfileContent2.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default ProfileContent2
