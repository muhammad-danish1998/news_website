import React from 'react'
import Post from '../Post'

const PostBgSection = () => {
    const texts = {
        bgBtn: 'ملاحق  ',
        postTitle: "في انتظار الخراب الكبير: تآمر وتواطؤ... وصمت!  ",
        postText: "على حسان دياب أن يقلق. لقد خرج رجلان من مكتبه طوعاً أو غصباً أو دفعاً. لكنهما خرجا محبطين من العجز.  ... ",
    }
    return (
        <div className="post-bg-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="post-bg-btn">
                            <a href="#">{texts.bgBtn}</a>
                        </div>
                    </div>
                    {[1, 2, 3].map((n) => <div key={n} className="col-md-4 col-sm-12">
                        <Post
                        imgSrc="/images/overlay-blog-3.jpg"
                        title={texts.postTitle}
                        text={texts.postText}
                        />
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default PostBgSection
