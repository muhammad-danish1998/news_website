import React from 'react'
import PropTypes from 'prop-types'

const Post = (props) => {
    const styles = {
        innerSection: {
            backgroundImage: `url(${props.imgSrc})`
        }
    }
    const texts = {
        title: ' أهل الشام  ',
        share: ' شارك',
    }
    return (
        <React.Fragment>
            <div className="post-inner-section-1" style={{
                backgroundImage: `url(${props.imgSrc})`
            }}>
                <h3>{texts.title}</h3>
                <div className="inner-post-info">
                    <h4>{props.title}</h4>
                    <p>{props.text}</p>
                    <a href={props.shareHref || '#'}>
                        <div className="dead-share">
                            <span>{texts.share}</span>
                            <img src="/images/Share icon gray.png" />                             
                        </div>
                    </a>
                </div>
            </div>
            <div className="post-inner-section-1 mobile-post-inner" style={styles.innerSection}>
                <h3>{texts.title}</h3>
                <div className="inner-post-info">
                    <p>{props.title}</p>
                    <a href={props.shareHref || '#'}>
                        <div className="dead-share">
                            <span>{texts.share}</span>
                            <img src="/images/Share icon gray.png" />                             
                        </div>
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
}

Post.propTypes = {
    shareHref: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Post
