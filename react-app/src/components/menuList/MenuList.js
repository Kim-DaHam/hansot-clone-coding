import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import "./menu_list.css";
import categoryData from '../data/category.js'
import menuData from '../data/menu.js';

function MenuList() {
  let [categoryList, setCategory] = useState(categoryData);
  let [menuList, setMenu] = useState(menuData);

  useEffect(() =>{
    
  }, []);

  return (
    <div className="MenuList">
      <div className="content">
        <p>신메뉴/행사</p>
        <h2>신메뉴</h2>
        <br/>
        <div className="w3-row-padding">
          {menuList.map((menu, idx)=>(
            <Link to="/menu/menu_view" key={idx}>
              <div key={menu.menu_id} name="menu_item" className="w3-third w3-container w3-margin-bottom">
              <img src={menu.img_url}/>
                <div className="w3-container">
                  <p><b>{menu.name}</b></p>
                  <p>{menu.price}</p>
                </div>
              </div>
            </Link>
          ))}
          </div>
          
        {/* Second Photo Grid 
        <div name="menu_item" className="w3-row-padding">
          <div className="w3-third w3-container w3-margin-bottom">
            <img src="/images/new04.jpg"/>
            <div className="w3-container">
              <p><b>오리지널 치즈 닭갈비덮밥</b></p>
              <p>5,9900원</p>
            </div>
          </div>
        </div>*/}
      </div>
    </div>
  );
}

export default MenuList;
