import "../stylesheets/menu.css";
import Header from '../components/header/Header.js';
import LeftMenu from '../components/leftMenu/LeftMenu.js';
import MenuList from '../components/menuList/MenuList.js';
import Footer from '../components/footer/Footer.js';

function Menu(props){
    return(
        <div id="body">
            <Header/>
            <div id="MenuContent">
                <div className="grid-container">
                    <div className="header">
                        <p>한솥 메뉴</p>
                        <p>-</p>
                    </div>
                    <LeftMenu/>
                    <MenuList/>
                </div>
            </div>
            <br/>
            <Footer/>
        </div>
    )
}

export default Menu;