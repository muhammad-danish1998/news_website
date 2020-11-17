import React from 'react';
import PropTypes from 'prop-types';

const ProfileContent = (props) => {
    const styles = {
        h4: {
            marginTop: '-4px'
        }
    }
    const classes = {
        content: `profile-img ${props.bordered ? 'profile-border' : ''}`
    }
    return (
        <div className="profile-content">
            <div className={classes.content}>
                <img src={props.imgSrc}/>
            </div>
            <div className="profile-info">
                <h4 style={styles.h4}>
                    <img src="/images/quotes-1.png" className="quotes-img"/>
                    <span>{props.title}</span>
                </h4>
                <p>
                    {props.text}
                </p>
            </div>
        </div>
    )
}

ProfileContent.propTypes = {
    bordered: PropTypes.bool,
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,

}

export default ProfileContent;
