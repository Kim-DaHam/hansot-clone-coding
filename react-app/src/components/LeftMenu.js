import { Route, Routes } from 'react-router-dom';
import "../stylesheets/left_menu.css";
import { React, Collapse } from 'bootstrap-4-react';

function LeftMenu() {
  return (
    <div className="LeftMenu">
      <div name="black-bar"></div>
      <div className="sidenav">
        <ul>
          <li><a href="#">전체보기</a> <hr/></li>
          <li><a data-toggle="collapse" data-target="#menu01" href="#">
            신메뉴/행사</a><hr/></li>
          <li><a data-toggle="collapse" data-target="#menu02" href="#">
            프리미엄·고메이</a><hr/></li>
          <li><a data-toggle="collapse" data-target="#menu03" href="#">
            사각도시락</a><hr/></li>
          <li><a data-toggle="collapse" data-target="#menu04" href="#">
            보울도시락</a><hr/></li>
          <li><a data-toggle="collapse" data-target="#menu05" href="#">
            실속반찬/사이드</a><hr/></li>
        </ul>

        <ul id="menu01" className="collapse">
          <li>신메뉴</li>
        </ul>
      </div>
      <br/>
      <a href="#"><img name="add" src="/images/add01.jpg"/></a>
    </div>
  );
}

export default LeftMenu;
