import "../stylesheets/main_content.css";
import Carousel from 'react-bootstrap/Carousel';

function MainContent(){
    return(
        <div id="Contents">
            {/* Carousel */}
            <div id="eventCarouselSlider" class="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ul class="carousel-indicators">
                    <li data-target="#eventCarouselSlider" data-slide-to="0" class="active"></li>
                    <li data-target="#eventCarouselSlider" data-slide-to="1"></li>
                    <li data-target="#eventCarouselSlider" data-slide-to="2"></li>
                </ul>
                {/* The slideshow */}
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="images/event01.jpg"/>
                    </div>
                    <div class="carousel-item">
                        <img src="images/event02.jpg"/>
                    </div>
                    <div class="carousel-item">
                        <img src="images/event03.jpg"/>
                    </div>
                </div>
                {/* Left and right controls */}
                <a class="carousel-control-prev" href="#eventCarouselSlider" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#eventCarouselSlider" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
            {/*}
            <div id="content01" class="w3-row-padding">
                <div id="c01-01" name="box" class="w3-third w3-container w3-margin-bottom">
                    <img src="images/image01.jpg" class="w3-hover-opacity"/>
                    <div class="w3-container">
                        <p><b>가격 이상의 가치가 담긴 메뉴를 확인해보세요</b></p>
                        <button>한솥 메뉴</button>
                    </div>
                    <div name="black-bar"></div>
                </div>
                <div id="c01-02" name="box" class="w3-third w3-container w3-margin-bottom">
                    <img src="images/image02.jpg" class="w3-hover-opacity"/>
                    <div class="w3-container">
                        <p><b>갓 지은 한 끼가 기다리고 있는 가까운 한솥 매장을 찾아보세요</b></p>
                        <button>주변점포찾기</button>
                    </div>
                    <div name="black-bar"></div>
                </div>
            </div>

            <div id="content02" class="w3-row-padding">
                <div id="c02-01" name="text-box" class="w3-third w3-container w3-margin-bottom" style="height: 402px; background-color: rgb(255, 209, 0);">
                    <div class="w3-container">
                        <h2><b>가맹점주에게도<br/>든든한 한솥입니다</b></h2>
                        <p>점주님들의 꿈을 실현시켜 드리기 위해 가맹점주와 성공까지 동행하는 한솥!
                        상담부터 개업까지 모든 희로애락을 함께합니다.</p>
                    </div>
                </div>
                <div id="c02-02" name="box" class="w3-third w3-container w3-margin-bottom">
                    <img src="images/image03.jpg" alt="Norway" class="w3-hover-opacity"/>
                    <div class="w3-container">
                        <p>한솥은 언제나 고객과 점주님들의 이익을 먼저 생각합니다</p>
                        <button>Why 한솥 가맹점</button>
                    </div>
                    <div name="black-bar"></div>
                </div>
                <div name="box" id="c02-03" class="w3-third w3-container w3-margin-bottom">
                    <img src="images/image04.jpg" alt="Norway" class="w3-hover-opacity"/>
                    <div class="w3-container">
                        <p>한솥과 함께하는 가맹점주들의 성공 스토리입니다</p>
                        <button>성공수기</button>
                    </div>
                    <div name="black-bar"></div>
                </div>
            </div>

            <div id="content03" class="w3-rows">
                <div id="c03-01" name="box" class="w3-third w3-margin-bottom">
                    <img src="images/image05.jpg"/>
                    <div id="c03-02" name="box" class="w3-third w3-container w3-margin-bottom">
                        <div class="w3-container">
                            <h2><b>든든한 솥밥을 위해<br/>한솥이 지키고,<br/>키워가는 것들</b></h2>
                            &nbsp;
                            <p>
                                한솥은 '따끈한 도시락으로 지역사회에 공헌한다' 라는<br/>기업이념 아래,
                                고객 이익을 최우선으로 하며 엄선된<br/>좋은 식재료만 사용하는
                                대한민국 외식종합기업 시장을<br/>리드하는 글로벌 종합외식기업 입니다.
                            </p>
                            <button>브랜드 철학</button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="content04" class="w3-row-padding">
                <div id="c04-01" name="box" class="w3-third w3-container w3-margin-bottom">
                    <img src="images/image06.jpg"/>
                </div>
                <div id="c04-02" name="box" class="w3-third w3-container w3-margin-bottom">
                    <div class="w3-container">
                        <h1><b>식재료 앞에서는<br/>한없이<br/>까탈스럽습니다</b></h1>
                        <p>
                            맑고 깨끗한 자연 환경속에서 재배된 식재료가 아니면
                            한솥이 될 수 없습니다. 모든 식재료는 고객분들이 안심하고
                            드실 수 있도록 엄격한 기준 아래 선별됩니다.
                        </p>
                        <button>식재료이야기</button>
                    </div>
                    <div name="black-bar"></div>
                </div>
            </div>

            <div id="content05" class="w3-row-padding">
                <h4><b>더 많은 이야기</b></h4>
                <div class="w3-third w3-container w3-margin-bottom">
                    <img src="images/image07.jpg"/>
                    <div class="w3-container w3-white">
                        <p>
                            한솥의 약속
                        </p>
                    </div>
                </div>
                <div class="w3-third w3-container w3-margin-bottom">
                    <img src="images/image08.jpg"/>
                    <div class="w3-container w3-white">
                        <p>
                            온라인 이벤트
                        </p>
                    </div>
                </div>
                <div class="w3-third w3-container w3-margin-bottom">
                    <img src="images/image09.jpg"/>
                    <div class="w3-container w3-white">
                        <p>
                            한솥 NEWS
                        </p>
                    </div>
                </div>
        </div>
    {*/}
        </div>
    )
}

export default MainContent;