import "../stylesheets/header.css";
import $ from 'jquery';

function header(){
    $(".nav-item").hover(
        function(){
            $('#collapse-menu').collapse('show');
            $(".nav-item").children.css("color","rgb(255, 209, 0)");
            
        }, function(){
            $('#collapse-menu').collapse('hide');
        }
    );
    return(
        <div id="Header">
            
            <div id="miniBar">
                <ul>
                    <li><a href="#">로그인</a></li>
                    <li><a href="#">회원가입</a></li>
                    <li><a href="#">instagram</a></li>
                    <li><a href="#">facebook</a></li>
                </ul>
            </div>
            <br/>
            
            <div id="NavBar">
                <nav id="navBody" class="navbar navbar-expand-sm">
                    <a id="Logo" href="#" class="navbar-brand"><img src="images/Logo.jpg"/></a>
                    <ul class="navbar-nav">
                        <li class="nav-item"><a href="#" data-toggle="collapse">BRAND</a></li>
                        <li class="nav-item"><a href="#" data-toggle="collapse">ESG</a></li>
                        <li class="nav-item"><a href="#" data-toggle="collapse">MENU</a></li>
                        <li class="nav-item"><a href="#" data-toggle="collapse">STORE</a></li>
                        <li class="nav-item"><a href="#" data-toggle="collapse">EVENT</a></li>
                        <li class="nav-item"><a href="#" data-toggle="collapse">FRANCHISE</a></li>
                        <li class="nav-item"><a href="#" data-toggle="collapse">HANSOT</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="collapse" id="collapse-menu">
                <ul id="menu-detail">
                    <li><a class="dropdown-item" href="#">전체메뉴</a></li>
                    <li><a class="dropdown-item" href="#">식재료 이야기</a></li>
                    <li><a class="dropdown-item" href="#">페루찬차마요커피</a></li>
                    <li><a class="dropdown-item" href="#">단체 주문</a></li>
                </ul>
                <ul id="hansot-detail">
                    <li><a class="dropdown-item" href="#">한솥의 약속</a></li>
                    <li><a class="dropdown-item" href="#">오시는 길</a></li>
                </ul>
            </div>
        </div>
    )
}

export default header;