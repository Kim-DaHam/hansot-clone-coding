import { Route, Routes } from 'react-router-dom';
import "../stylesheets/left_menu.css";
import { React } from 'bootstrap-4-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from "react-bootstrap";

function LeftMenu() {
  return (
    <div className="LeftMenu">
      <div name="black-bar"></div>
        <Accordion className="sidenav" defaultActiveKey="0" flush>
          <ul id="side-menu">
            <Accordion.Item eventKey="0">
              <Accordion.Header><b>전체메뉴</b></Accordion.Header>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header><b>신메뉴/행사</b></Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li><a href="#">신메뉴</a></li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header><b>프리미엄·고메이</b></Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li><a href="#">프리미엄</a></li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header><b>사각도시락</b></Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li><a href="#">고기고기시리즈</a></li>
                  <li><a href="#">모둠시리즈</a></li>
                  <li><a href="#">정식시리즈</a></li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header><b>보울도시락</b></Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li><a href="#">마요</a></li>
                  <li><a href="#">카레</a></li>
                  <li><a href="#">볶음밥</a></li>
                  <li><a href="#">프리미엄 찌개/탕</a></li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header><b>실속반찬/사이드</b></Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li><a href="#">실속반찬</a></li>
                  <li><a href="#">스낵 시리즈</a></li>
                  <li><a href="#">미니반찬</a></li>
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
