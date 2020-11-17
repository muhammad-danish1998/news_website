import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const SubHeader = () => {
   const texts = {
      menu1: 'عنوان ١ ',
      menu2: ' عنوان أساسي'
   }
    return (
      <div>
         <div className="sub-header desktop">
        <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="sub-menu-bar">
                     <ul>
                       <li className="read-tags">اقرأ </li>
                        <li><a href="#">{texts.menu1} </a></li>
                        <li><a href="#">{texts.menu2} </a></li>
                        <li><a href="#">{texts.menu1} </a></li>
                        <li><a href="#">{texts.menu2} </a></li>
                        <li><a href="#">{texts.menu1} </a></li>
                        <li><a href="#">{texts.menu2} </a></li>
                        <li><a href="#">{texts.menu1} </a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="sub-header mobile">

      <div className="container">

         <div className="row">
                     <div className="col-2">
                      <span className="read-tags">اقرأ </span>
</div>

            <div className="col-10">

               <div id="subMenuBar" className="sub-menu-bar swiper-container" dir="rtl">
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
    >                      
      <SwiperSlide><a href="#">{texts.menu1}  </a></SwiperSlide>
      <SwiperSlide><a href="#">{texts.menu1}  </a></SwiperSlide>
      <SwiperSlide><a href="#">{texts.menu1}  </a></SwiperSlide>
      <SwiperSlide><a href="#">{texts.menu1}  </a></SwiperSlide>
    </Swiper>
           

               </div>

            </div>

         </div>

      </div>

   </div>
   </div>

    )
}

export default SubHeader;
