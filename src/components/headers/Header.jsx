import React from 'react'
import './Header.css'
import { useState } from 'react';
// import {BitMenuAltRight} from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
const Header = () => {
  const [menuOpened,setMenuOpened] =useState(false)
  const getMenuStyles = (menuOpened) =>{
    if(document.documentElement.clientWidth <= 800)
    {
        return {right: !menuOpened && "-100%" }
    }
  }
    return (
        <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
          <img src="./logo1.png" alt="logo" width={100} />
          <OutsideClickHandler onOutsideClick={ ()=> {
            setMenuOpened(false)}
          }>
          <div className='flexCenter h-menu'
           style={getMenuStyles(menuOpened)}>
            <a href="">home</a>
            <a href="">about</a>
            <a href="">register</a>
            <a href="">login</a>
            <button className='button'>
            <a href="">contact</a>
            </button>
          </div> 
          </OutsideClickHandler>
          {/* <div className="menu-icon" onClick={() => setMenuOpened((prev)=> !prev)}>
          <BitMenuAltRight size={30}/>
        </div> */}
        </div>
       </section>
    );
}
export default Header