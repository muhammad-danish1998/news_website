import Navbar from "../components/header/Navbar";
import HeaderMenu from "../components/header/HeaderMenu";
import SubHeader from "../components/header/SubHeader";
import { useEffect, useState } from "react";

export default function Header() {
  const [state, setState] = useState('top');
  
  useEffect(() => {
    window.addEventListener('scroll', e => {
      console.log(window.scrollY);
      if (window.scrollY > 150) {
        setState('sticky');
      } else if (window.scrollY < 150) {
        setState('top');
      }
    })
  }, [])
  return (
    <React.Fragment>
      <header className={state === 'sticky' ? 'mini' : ''}>
        <Navbar sticky={state === 'sticky'}/>
        {state === 'top' && <HeaderMenu />}
      </header>
      <SubHeader />
    </React.Fragment>
  );
}