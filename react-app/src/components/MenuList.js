import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../stylesheets/menu_list.css";

function MenuList() {
  return (
    <div className="MenuList">
        <div className="content">
          <p>신메뉴/행사</p>
          <h2>신메뉴</h2>
          <br/>
          <div class="w3-row-padding">
            <Link to="/menu/menu_view">
              <div name="menu_item" class="w3-third w3-container w3-margin-bottom">
                <img src="/images/new01.jpg"/>
                <div class="w3-container">
                  <p><b>아보카도 게맛살 명란비빔밥</b></p>
                  <p>6,500원</p>
                </div>
              </div>
            </Link>
            <Link to="/menu/menu_view">
              <div name="menu_item" class="w3-third w3-container w3-margin-bottom">
                <img src="/images/new02.jpg"/>
                <div class="w3-container">
                  <p><b>아보카도 소고기 명란비빔밥</b></p>
                  <p>6,500원</p>
                </div>
              </div>
            </Link>
            <div name="menu_item" class="w3-third w3-container">
              <img src="/images/new03.jpg"/>
              <div class="w3-container">
                <p><b>핫 치즈 닭갈비덮밥</b></p>
                <p>5,900원</p>
              </div>
            </div>
          </div>
          <br/>
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
