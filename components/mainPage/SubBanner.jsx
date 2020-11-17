import React from 'react'

const SubBanner = () => {
   const texts = {
      topBtn: ' لبنان  ',
      title: 'المزيد ',
      images1: 'الدولار بلا سقف...',
      images2: 'والسفيرة الأميركية بلا رادع',
      share: 'شارك',
      bottomBtn: 'عنوان ٤ '

   }
    return (
        <div className="sub-banner-section">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="sub-inner-banner">
                     <a className="top-btn" href="#">{texts.topBtn} </a>
                     <h3>{texts.title} </h3>
                     <div className="images-section">
                        <h4>{texts.images1} </h4>
                        <h2>{texts.images2} </h2>
                        <a href="#">
                           <div className="dead-share">
                              <span>{texts.share} </span>
                              <img src="images/Share icon gray.png" />                             
                           </div>
                        </a>
                     </div>
                     <div className="bottom-btn">
                        <a href="#">{texts.bottomBtn} </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
}

export default SubBanner
