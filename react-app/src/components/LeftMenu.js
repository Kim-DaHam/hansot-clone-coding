//import { Route, Routes } from 'react-router-dom';
import "../stylesheets/left_menu.css";
import { React } from 'bootstrap-4-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from "react-bootstrap";
import { useEffect, useState } from "react";
import categoryData from '../data/category.js'
import menuData from '../data/menu.js';

function LeftMenu() {

  let [categoryList, setCategory] = useState(categoryData);
  let [menuList, setMenu] = useState(menuData);

  return (
    <div className="LeftMenu">
      <div name="black-bar"></div>
        <Accordion className="sidenav" flush>
          <ul id="side-menu">
            <Accordion.Item eventKey="0">
              <Accordion.Header>전체메뉴</Accordion.Header>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>신메뉴/행사</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>신메뉴</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>프리미엄·고메이</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>프리미엄</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>사각도시락</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>고기고기시리즈</li>
                  <li>모둠시리즈</li>
                  <li>정식시리즈</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>보울도시락</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>마요</li>
                  <li>카레</li>
                  <li>볶음밥</li>
                  <li>프리미엄 찌개/탕</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>실속반찬/사이드</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>실속반찬</li>
                  <li>스낵 시리즈</li>
                  <li>미니반찬</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </ul>
        </Accordion>
      <br/>
      <a href="#"><img name="add" src="/images/add01.jpg"/></a>
    </div>
  );
}

export default LeftMenu;
