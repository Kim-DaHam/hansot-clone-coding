//import { Route, Routes } from 'react-router-dom';
import "../stylesheets/left_menu.css";
import { React } from 'bootstrap-4-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from "react-bootstrap";
import categoryData from '../data/category.js'
import menuData from '../data/menu.js'
import { useEffect, useState } from "react";

function LeftMenu() {

  let [category, setCategory] = useState(categoryData);
  let [menu, setMenu] = useState(menuData);

  return (
    <div className="LeftMenu">
      <div name="black-bar"></div>
        <Accordion className="sidenav" defaultActiveKey="0" flush>
          <ul id="side-menu">
            <Accordion.Item eventKey="0">
              <Accordion.Header><b>전체메뉴</b></Accordion.Header>
            </Accordion.Item>
            {
              console.log(category)
            }
            <Accordion.Item eventKey="1">
              <Accordion.Header><b>신메뉴/행사</b></Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li><a href="#">신메뉴</a></li>
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
