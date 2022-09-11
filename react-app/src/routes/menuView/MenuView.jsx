import "./menu_view.css";
import {Header, Footer} from '../../components/index.js';

const MenuView = (props) => {
    return(
        <div id="MVbody">
            <Header/>
            <div id="MVContent">
                <div id="container">
                    <div id="inner" className="grid-container">
                        <div className="header">
                            <h2><b>← 전체 메뉴</b></h2>
                        </div>
                        <div className="left">
                            <img src="" />
                        </div>
                        <div className="right">
                            <h4>메뉴 이름</h4>
                            <br/>
                            <p>메뉴 설명</p>
                            <br/>
                            <hr/><br/>
                            <h4>가격</h4>
                        </div>
                    </div>
                </div>
                <h4>열량</h4>
                <h3><b>열량</b><span> Kcal</span></h3>
                <br/>
            </div>
            <br/>
            <Footer/>
        </div>
    )
}

export default MenuView;