import "../stylesheets/menu_view.css";
import Header from '../components/header/Header.js';
import Footer from '../components/footer/Footer.js';

function MenuView(props){
    return(
        <div id="MVbody">
            <Header/>
            <div id="MVContent">
                <div id="container">
                    <div id="inner" className="grid-container">
                        <div className="header">
                            <h2>← 전체 메뉴</h2>
                        </div>
                        <div className="left">
                            Left
                        </div>
                        <div className="right">
                            Right
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <Footer/>
        </div>
    )
}

export default MenuView;