import React from 'react'
import {FaSearch,FaCaretSquareDown} from 'react-icons/fa'
import picture1 from '../assets/picture1.jpg'
import { useEffect, useState } from "react";
import { useScrollPosition } from '../hooks/useScrollPositions';
function Header() {
 const scrollPosition = useScrollPosition();
 function className(...classes){
  return classes.filter(Boolean).join(' ');
 }
  return (
    
    <section className='banner'>
    <header className={className(scrollPosition>0 ? 'container header__scrolling': 'container')}>   
        <ul>
            <li className='active'> <a className={className(scrollPosition>0 ? 'scrolling': '')} href="#">Trang Chủ</a></li>
            <li><a className={className(scrollPosition>0 ? 'scrolling': '')} href="#">Thể Loại</a></li>
            <li><a className={className(scrollPosition>0 ? 'scrolling': '')} href="#">Xếp Hạng</a></li>
            <li><a className={className(scrollPosition>0 ? 'scrolling': '')} href="#">Hỏi Đáp</a></li>
            <li><a className={className(scrollPosition>0 ? 'scrolling': '')} href="#">Diễn Đàn</a></li>
        </ul>
        <h2>LAUGH MANGA</h2>
        <div className='search-button'>
            <button className={className(scrollPosition>0 ? 'scrolling': '')}>
            <FaSearch/>
            </button>
            <button className={className(scrollPosition>0 ? 'scrolling': '')}>
            <FaCaretSquareDown/>
            </button>
        </div>
        
    </header>
    <div className="banner__content">
      <img src={picture1} alt="" />
      <div className="banner__notice">
        <h2>Jujutsu Kaisen</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem maxime, non doloribus at sequi consectetur distinctio iusto mollitia enim sed?</p>
      </div>
      <div className="banner__button">
        <button>XEM THÔNG TIN</button>
      </div>
      <div className="banner__status">
        <p>CẬP NHẬT GẦN ĐÂY</p>
      </div>
    </div>
    </section>
  )
}

export default Header