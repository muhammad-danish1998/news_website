import React from 'react'

const TopBanner = () => {
   const styles = {
      img: {marginLeft: '5px'}
   }
   const texts = {
      title: 'عنوان ٤ ',
      h3: 'العدو يحرّك «صفقة التبادل»: ',
      h4: 'تقدّم جدّي أم تغطية على الضم؟ ',
      cameraDesktop: ' صيف لاهب في الأغوار. بخطوات متسارعة، يلوّح العدو الإسرائيلي بفرض سيادته على الأغوار  ',
      cameraMobile: ' وحيداً في وادي عربة ... لا صورة ولا حتى خبر قديم عن زيارة عبد ',
      playDesktop: ' يا نبضَ الضفّة... يتهيّأ بنيامين نتنياهو، حسب معظم المؤشرات، لتنفيذ وعوده الانتخابيّة',
      playMobile: ' يا نبضَ الضفّة... يتهيّأ بنيامين نتنياهو، حسب معظم المؤشراتيتهيّأ بنيامين نتنياهو، حسب معظم ',
      quotesDesktop: ' وحيداً في وادي عربة ... لا صورة ولا حتى خبر قديم عن زيارة عبد الله الثاني إلى القدس.',
      quotesMobile: 'وحيداً في وادي عربة ... لا صورة ولا حتى خبر قديم عن زيارة عبد '


   }
   return (
    <div className="top-banner">
     <div className="container">
      <div className="row">
         <div className="col-md-12">
          <div className="banner-content">
           <a href="#">{texts.title} </a>
           <h3>{texts.h3} </h3>
           <h4>{texts.h4} </h4>
           <div className="desktop">
            <p><img style={styles.img} className="quotes-img" src="images/quotes-1.png"/>{texts.quotesDesktop} </p>
            <p><i className="fas fa-camera"></i>{texts.cameraDesktop} </p>
            <p><i className="fas fa-play-circle"></i>{texts.playDesktop} </p>
           </div>
           <div className="mobile">
            <p><img style={styles.img} className="quotes-img" src="images/quotes-1.png"/>{texts.quotesMobile} </p>
            <p><i className="fas fa-camera"></i>{texts.cameraMobile} </p>
            <p><i className="fas fa-play-circle"></i>{texts.playMobile} </p>
           </div>
          </div>
         </div>
      </div>
     </div>
    </div>
   )
}

export default TopBanner
