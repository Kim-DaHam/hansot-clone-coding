import "./menu.css";
import {Header, Footer, LeftMenu, MenuList} from '../components/index.js';

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