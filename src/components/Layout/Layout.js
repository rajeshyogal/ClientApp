import React from 'react';
import './Layout.css';
import ClassBanner from './ClassBanner';
import Header from './Header';
import Main from './Main';
import SideBar from './SideBar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div>
      <div className="classBanner-section classbanner-postop"><ClassBanner /></div>
      <div className="header-section"><Header /></div>
      <div className="sidebar-section"><SideBar /></div>
      
      <div className="classBanner-section classbanner-posbottom"><ClassBanner /></div>
    </div>
  );
}

export default Layout;