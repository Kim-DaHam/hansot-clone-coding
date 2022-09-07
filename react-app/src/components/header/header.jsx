import "./header.css";
import { Link } from 'react-router-dom';
//import $ from 'jquery';
//import { useEffect, useState } from "react";

const Header = () => {
    
    function openCollapse(e) {
        //$('#collapse-menu').collapse('show');
        //const collmenu = document.querySelector('#collapse-menu');
        //collmenu.collapse('show');
    }

    function closeCollapse(e) {
        //const collmenu = document.querySelector('#collapse-menu');
        //collmenu.collapse('hide');
    }

    return(
        <div id="Header">
            <div id="miniBar">
                <ul>
                    <li><a href="#">로그인</a></li>
                    <li><a href="#">회원가입</a></li>
                    <li><a href="#">instagram</a></li>
                    <li><a href="#">facebook</a></li>
                </ul>
            </div>
            <br/>

            <div id="NavBar">
                <nav id="navBody" className="navbar navbar-expand-sm">
                    <Link id="Logo" to="/" className="navbar-brand">
                        <img src="images/Logo.png"/></Link>
                    <ul className="navbar-nav">
                        <li className="nav-item" onMouseOver={openCollapse}
                        onMouseLeave={closeCollapse}>
                            <a data-target="#collapse-menu" data-toggle="collapse" aria-controls="collapse-menu" href="#">BRAND</a></li>
                        <li className="nav-item">
                            <a data-target="#collapse-menu" data-toggle="collapse" href="#">ESG</a></li>
                        <li className="nav-item">
                            <a data-target="#collapse-menu" data-toggle="collapse" href="#">MENU</a></li>
                        <li className="nav-item">
                            <a data-target="#collapse-menu" data-toggle="collapse" href="#">STORE</a></li>
                        <li className="nav-item">
                            <a data-target="#collapse-menu" data-toggle="collapse" href="#">EVENT</a></li>
                        <li className="nav-item">
                            <a data-target="#collapse-menu" data-toggle="collapse" href="#">FRANCHISE</a></li>
                        <li className="nav-item">
                            <a data-target="#collapse-menu" data-toggle="collapse" href="#">HANSOT</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="collapse" id="collapse-menu">
                <ul id="brand-detail">
                    <li><a href="#">브랜드 스토리</a></li>
                    <li><a href="#">브랜드 철학</a></li>
                </ul>
                <ul id="esg-detail">
                    <li><a href="#">ESG경영이란?</a></li>
                    <li><a href="#">환경보호</a></li>
                    <li><a href="#">사회공헌</a></li>
                </ul>
                <ul id="menu-detail">
                    <li><Link to="/menu">전체메뉴</Link></li>
                    <li><a href="#">식재료 이야기</a></li>
                    <li><a href="#">페루찬차마요커피</a></li>
                    <li><a href="#">단체 주문</a></li>
                </ul>
                <ul id="store-detail">
                    <li><a href="#">주변점포찾기</a></li>
                </ul>
                <ul id="event-detail">
                    <li><a href="#">이 달의 이밴트</a></li>
                </ul>
                <ul id="fran-detail">
                    <li><a href="#">Why 한솥 가맹점</a></li>
                </ul>
                <ul id="hansot-detail">
                    <li><a href="#">한솥의 약속</a></li>
                    <li><a href="#">오시는 길</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;