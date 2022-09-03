import "../stylesheets/header.css";
import $ from 'jquery';
import { useEffect, useState } from "react";

function Header(){
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
                <nav id="navBody" class="navbar navbar-expand-sm">
                    <a id="Logo" href="#" class="navbar-brand"><img src="images/Logo.png"/></a>
                    <ul class="navbar-nav">
                        <li class="nav-item"><a href="#collapse-menu" data-toggle="collapse">BRAND</a></li>
                        <li class="nav-item"><a href="#collapse-menu" data-toggle="collapse">ESG</a></li>
                        <li class="nav-item"><a href="#collapse-menu" data-toggle="collapse">MENU</a></li>
                        <li class="nav-item"><a href="#collapse-menu" data-toggle="collapse">STORE</a></li>
                        <li class="nav-item"><a href="#collapse-menu" data-toggle="collapse">EVENT</a></li>
                        <li class="nav-item"><a href="#collapse-menu" data-toggle="collapse">FRANCHISE</a></li>
                        <li class="nav-item"><a href="#collapse-menu" data-toggle="collapse">HANSOT</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="collapse" id="collapse-menu">
                <ul id="menu-detail">
                    <li><a class="dropdown-item" href="#">전체메뉴</a></li>
                    <li><a class="dropdown-item" href="#">식재료 이야기</a></li>
                    <li><a class="dropdown-item" href="#">페루찬차마요커피</a></li>
                    <li><a class="dropdown-item" href="#">단체 주문</a></li>
                </ul>
                <ul id="hansot-detail">
                    <li><a class="dropdown-item" href="#">한솥의 약속</a></li>
                    <li><a class="dropdown-item" href="#">오시는 길</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;