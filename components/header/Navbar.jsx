import React, { useState } from 'react';
import Link from 'next/link';
import { useFetch } from '../../hooks/useFetch';
import RightSubmenu from './RightSubmenu';
const Navbar = ({ sticky }) => {
  const texts = {
    searchInput: "ابحث هنا ",
    newspaperIcon: 'أخبار ',
    playIcon: 'فيديو ',
    podcastIcon: 'بودكاست ',
    circleNotchIcon: 'الأكثر قراءة ',
    accordionLinkSep: 'رأي',
    accordionLink1: 'لبنان ',
    accordionLink2: '>عرب ',
    accordionLink3: 'عالم',
    accordionLink4: ' ثقافة وناس',
    accordionLink5: 'رياضة',
    accordion11: 'فلسطين ',
    accordion12: 'اقتصاد ',
    accordion13: 'مجتمع ',
    accordion14: 'تربية وتعليم',
    accordion21: 'فلسطين ',
    accordion22: 'سوريا ',
    accordion23: 'العراق',
    accordion24: 'اليمن',
    accordion25: 'مصر ',
    accordion26: 'الجزيرة العربية',
    accordion27: 'المغرب العربي',
    accordion31: 'اوروبا',
    accordion32: 'آسيا ',
    accordion33: 'افريقيا ',
    accordion34: 'اميركا',
    accordion41: 'آداب وفنون',
    accordion42: 'ميديا ',
    accordion43: 'Yahoo',
    accordion51: 'رياضة محلية ',
    accordion52: 'كرة قدم',
    link1: 'بيئة وصحة',
    link2: 'تكنولوجيا وعلوم',
    link3: 'أعمال',
    link4: 'رأس المال',
    link5: 'مرأة',
    link6: 'تجربة',
    link7: 'مدوّنات مصوّرة',
    link8: 'جريدة اليوم ',
    link9: ' الأرشيف',
    testIcon: 'اختبارات',
    downloadSection: 'حمّل تطبيق الأخبار ',
    leftHeader: 'اشترك',
  }

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { loading, texts: res } = useFetch(
    'https://akhbar.thewickfirm.com/navigation/5fb0c7fcb62f9e385f0df443');
  console.log('FFF')
  console.log(res);
  return (

    <div className="top-menu">
    <div className="top-bar-mobile">
      <div className="mobile-top-btn">
        <a href="/"><span style={{color: "#fff"}}>تابعنا </span></a>
      </div>
      <div className="social-icon">
        <a href="https://www.youtube.com/channel/UCesINM73oox7GBSXTHz9Xiw"><i className="fab fa-youtube" aria-hidden="true"></i></a>
        <a target="_blank" href="https://www.instagram.com/alakhbarnewspaper/"><i className="fab fa-instagram" aria-hidden="true"></i></a>
        <a target="_blank" href="https://www.linkedin.com/company/al-akhbar/"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a>
        <a target="_blank" href="https://www.facebook.com/AlakhbarNews"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
        <a target="_blank" href="https://twitter.com/AlakhbarNews"><i className="fab fa-twitter" aria-hidden="true"></i></a>
      </div>
    </div>
      <div className="container-fluid">
        <div className="main-header">
          <div className="row">
            <div className="col-md-4">
              <div className="right-header">
                <div className="hamburger-menu">
                  <div className="menu-overlay"
                  style={{
                    display: menuOpen ? 'block' : 'none',
                  }}></div>
                  <input id="menu__toggle" type="checkbox"
                  checked={menuOpen}
                  onChange={e => {
                    if (loading) return;
                    setMenuOpen(e.target.checked)
                  }}
                  style={{
                    marginBottom: 0
                  }}/>
                  <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                  </label>
                  <ul className="menu__box">
                    <form action="/action_page.php">
                      <button type="submit"><i className="fa fa-search"></i></button>
                      <input type="text" placeholder={texts.searchInput} name="search" />
                    </form>
                    <div className="bottom-footer burger-mobile-menu">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-2">
                            <i className="far fa-newspaper"></i>
                            <p>{texts.newspaperIcon} </p>
                          </div>
                          <div className="col-md-2">
                            <i className="fas fa-play"></i>
                            <p>{texts.playIcon} </p>
                          </div>

                          <div className="col-md-2">
                            <i className="fas fa-podcast" aria-hidden="true"></i>
                            <p>{texts.podcastIcon} </p>
                          </div>
                          <div className="col-md-2">
                            <i className="fas fa-circle-notch"></i>
                            <p>{texts.circleNotchIcon} </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul id="accordion" className="accordion">
                      {!loading && res.items.map(item => 
                        <RightSubmenu item={item}/>
                      )}
                      {/* <li>
                        <div className="link">{texts.accordionLink1}
                        <i className="fa fa-chevron-down"
                        onClick={e => setOpen1(!open1)}></i></div>
                        <ul className="submenu" style={{
                          display: open1 ? 'block' : 'none'
                        }}>
                          <li><a href="#">{texts.accordion11} </a></li>
                          <li><a href="#">{texts.accordion12} </a></li>
                          <li><a href="#">{texts.accordion13} </a></li>
                          <li><a href="#">{texts.accordion14} </a></li>
                        </ul>
                      </li> */}
                    </ul>
              
                    <div className="social-icon">
                      <a target="_blank" href="https://www.youtube.com/channel/UCesINM73oox7GBSXTHz9Xiw"><i className="fab fa-youtube" aria-hidden="true"></i></a>
                      <a target="_blank" href="https://www.instagram.com/alakhbarnewspaper/"><i className="fab fa-instagram" aria-hidden="true"></i></a>
                      <a href="#"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a>
                      <a target="_blank" href="https://www.facebook.com/AlakhbarNews"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
                      <a target="_blank" href="https://twitter.com/AlakhbarNews"><i className="fab fa-twitter" aria-hidden="true"></i></a>
                    </div>
                    <div className="download-section">
                      <a href="#">{texts.downloadSection} </a>
                    </div>
                    <div className="footer-icon">
                      <a href="#"><img src="images/footer-icon-2.png"/></a>
                      <a href="#"><img src="images/footer-icon-1.png"/></a>
                    </div>
                  </ul>

                </div>
                <div className="search">
                  <a href="#">
                    <i className="fas fa-search"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="header-logo">
<Link href="/">
                                    <img id="logo" src="/images/logo.png" style={{
                    display: sticky ? 'none' : 'inline-block'
                  }}/>
                                  </Link>

<Link href="/">

                  <img id="logo_mini" src="/images/logo.png" style={{
                    display: sticky ? 'inline-block' : 'none'
                  }}/>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="left-header">
                <a href="#">
                  <i className="fas fa-bell"></i>
                </a>

                   <Link href="/subscribe">
                    <a className="blink_link">
                     {texts.leftHeader}                  
                    </a>
                     </Link>
                <img id="newspaper" src="/images/newspaper.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
