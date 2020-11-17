import React from 'react'
import PropTypes from 'prop-types'

const ProfileContent3 = (props) => {
    const styles = {
        main: {
            borderBottom: props.noBorderBottom ? 'none' : '1px solid #d4d4d4',
        },
        imgDiv: {
            width: props.imgWidth || '40%',
            minWidth: '78px',
            display: 'flex',
            alignItems: 'center',
        },
        img: {
            width: '100%',
            maxWidth: '100%',
        },
        infoDiv: {
            textAlign: 'right',
            marginRight: '15px',
        },
        text: {
            color: '#cb051a',
            fontSize: '14px',
            fontFamily: 'GE-Medium',
            paddingRight: props.paddingRight || 0,
        },
        title: {
            paddingTop: props.paddingTop || 0,
            paddingRight: props.paddingRight || 0,
            paddingBottom: props.paddingBottom || 0,
            fontSize: '13px',
            fontFamily: 'jalal',
            lineHeight: '23px',
            color: '#000',
        }
    }
    return (
        <div className="profile-content" style={styles.main}>
            <div className="profile-img" style={styles.imgDiv}>
                <img src={props.imgSrc} style={styles.img}/>
            </div>
            <div className="profile-info" style={styles.infoDiv}>
                <h4 style={styles.text}>{props.text}</h4>
                <p style={styles.title}>{props.title}</p>
            </div>
        </div>
    )
}

ProfileContent3.propTypes = {
    noBorderBottom: PropTypes.bool,
    imgWidth: PropTypes.string,
    paddingTop: PropTypes.string,
    paddingRight: PropTypes.string,
    paddingBottom: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    style: PropTypes.object,
}

export default ProfileContent3