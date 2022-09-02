import "../stylesheets/header.css";

function header(){
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
                <nav id="navBody" class="navbar navbar-expand-sm bg-light navbar-light">
                    <a id="Logo" href="#" class="navbar-brand"><img src="../../images/Logo.jpg"/></a>
                    <ul class="navbar-nav">
                        <li class="nav-item"><a href="#" data-toggle="collapse" data-target="#collapse-menu">BRAND</a></li>
                        <li class="nav-item"><a href="#" data-toggle="collapse" data-target="#collapse-menu">ESG</a></li>
                        <li class="nav-item"><a href="#" data-toggle="collapse" data-target="#collapse-menu">MENU</a></li>
                        <li class="nav-item"><a href="#" data-toggle="collapse" data-target="#collapse-menu">STORE</a></li>
                        <li class="nav-item"><a href="#" data-toggle="collapse" data-target="#collapse-menu">EVENT</a></li>
                        <li class="nav-item"><a href="#" data-toggle="collapse" data-target="#collapse-menu">FRANCHISE</a></li>
                        <li class="nav-item"><a href="#" data-toggle="collapse" data-target="#collapse-menu">HANSOT</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="collapse" id="collapse-menu">
                <ul>
                    <li><a class="dropdown-item" href="#">전체메뉴</a></li>
                    <li><a class="dropdown-item" href="#">식재료 이야기</a></li>
                    <li><a class="dropdown-item" href="#">페루찬차마요커피</a></li>
                    <li><a class="dropdown-item" href="#">단체 주문</a></li>
                </ul>
                <ul>
                    <li><a class="dropdown-item" href="#">한솥의 약속</a></li>
                    <li><a class="dropdown-item" href="#">오시는 길</a></li>
                </ul>
            </div>
        </div>
    )
}

export default header;