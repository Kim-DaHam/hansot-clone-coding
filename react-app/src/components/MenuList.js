import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import "../stylesheets/menu_list.css";

function MenuList() {
  const [menuList, setMenuList] = useState([]);
  let rowItemCount = 0;

  function loadMenuList() {

  }

  function increaseCount(ric){
    return ric++;
  }

  useEffect(() =>{
    loadMenuList();
  }, []);

  return (
    <div className="MenuList">
      <div className="content">
        <p>신메뉴/행사</p>
        <h2>신메뉴</h2>
        <br/>
        <div class="w3-row-padding">
          {menuList.map((menu)=>(
            
            <Link to="/menu/menu_view">
              <div key={menu.menu_id} name="menu_item" class="w3-third w3-container w3-margin-bottom">
              <img src={menu.img_url}/>
                <div class="w3-container">
                  <p><b>{menu.name}</b></p>
                  <p>{menu.price}</p>
                </div>
              </div>
            </Link>
          ))}
          </div>
        {/* Second Photo Grid */}
        <div name="menu_item" class="w3-row-padding">
          <div class="w3-third w3-container w3-margin-bottom">
            <img src="/images/new04.jpg"/>
            <div class="w3-container">
              <p><b>오리지널 치즈 닭갈비덮밥</b></p>
              <p>5,9900원</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuList;
