import "../stylesheets/menu.css";
import Header from '../components/Header.js';
import LeftMenu from '../components/LeftMenu.js';
import MenuList from '../components/MenuList.js';
import Footer from '../components/Footer.js';

function Menu(props){
    return(
        <div id="body">
            <Header/>
            <div id="MenuContent">
                <div className="grid-container">
                    <div className="header">
                        <p>한솥 메뉴</p>
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