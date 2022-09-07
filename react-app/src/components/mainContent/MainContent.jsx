import "./main_content.css";
import Bootstrap, { Carousel, BImg } from 'bootstrap-4-react';
import { useEffect } from "react";


const MainContent = () => {

    function showYellow(e){
        const yb = e.currentTarget.parentElement.children['yellow-bar'];
        const bb = e.currentTarget.parentElement.children['black-bar'];

        yb.style.left = '0%';
        yb.style.width = getComputedStyle(bb).width;
    }

    function hideYellow(e) {
        const yb = e.currentTarget.parentElement.children['yellow-bar'];
        yb.style.visibility = 'visible';
        yb.style.left = '50%';
        yb.style.width = '0px';
    }

    useEffect(()=>{

    });

    return(
        <div id="Contents">
            <Carousel id="carouselExampleControls">
                <Carousel.Inner>
                    <Carousel.Item active><BImg name="eImg" display="block" src='/images/event01.jpg'/></Carousel.Item>
                    <Carousel.Item><BImg name="eImg" display="block" src='/images/event02.jpg'/></Carousel.Item>
                    <Carousel.Item><BImg name="eImg" display="block" src='/images/event03.jpg'/></Carousel.Item>
                </Carousel.Inner>
                <Carousel.Prev href="#carouselExampleControls">
                    <Carousel.Prev.Icon />
                </Carousel.Prev>
                <Carousel.Next href="#carouselExampleControls">
                    <Carousel.Next.Icon />
                </Carousel.Next>
            </Carousel>

            <div id="content01" className="w3-row-padding">
                <div id="c01-01" className="w3-third w3-container">
                    <a href="#" onMouseOver={showYellow} onMouseLeave={hideYellow}>
                        <img src="images/image01.jpg"/>
                        <div className="w3-container">
                            <br/>
                            <h3>가격 이상의 가치가 담긴<br/>메뉴를 확인해보세요</h3>
                            <br/>
                            <button>한솥 메뉴</button>
                        </div>
                        <br></br>
                    </a>
                    <div name="yellow-bar"></div>
                    <div name="black-bar"></div>
                </div>
                <div id="c01-02" className="w3-third w3-container">
                <a href="#" onMouseOver={showYellow} onMouseLeave={hideYellow}>
                        <img src="images/image02.jpg"/>
                        <div className="w3-container">
                            <br/>
                            <h3>갓 지은 한 끼가 기다리고 있는<br/>가까운 한솥 매장을 찾아보세요</h3>
                            <br/>
                            <button>주변점포찾기</button>
                        </div>
                    </a>
                    <br></br>
                    <div name="yellow-bar"></div>
                    <div name="black-bar"></div>
                </div>
            </div>

            <div id="content02" className="w3-row-padding">
                <div id="c02-01" name="text-box" className="w3-third w3-container w3-margin-bottom">
                    <div className="w3-container">
                        <h2><b>가맹점주에게도<br/>든든한 한솥입니다</b></h2>
                        <br/>
                        <p>점주님들의 꿈을 실현시켜 드리기 위해 가맹점주와 성공까지 동행하는 한솥!
                        상담부터 개업까지 모든 희로애락을 함께합니다.</p>
                    </div>
                </div>
                <div id="c02-02" className="w3-third w3-container w3-margin-bottom">
                <a href="#" onMouseOver={showYellow} onMouseLeave={hideYellow}>
                    <img src="images/image03.jpg"/>
                    <div className="w3-container">
                        <br/>
                        <h4>한솥은 언제나 고객과 점주님들의<br/>이익을 먼저 생각합니다</h4>
                        <br/>
                        <button>Why 한솥 가맹점</button>
                    </div></a>
                    <br/>
                    <div name="yellow-bar"></div>
                    <div name="black-bar"></div>
                </div>
                <div id="c02-03" className="w3-third w3-container w3-margin-bottom">
                <a href="#" onMouseOver={showYellow} onMouseLeave={hideYellow}>
                    <img src="images/image04.jpg"/>
                    <div className="w3-container">
                        <br/>
                        <h4>한솥과 함께하는 가맹점주들의<br/>성공 스토리입니다</h4>
                        <br/>
                        <button>성공수기</button>
                    </div></a>
                    <br/>
                    <div name="yellow-bar"></div>
                    <div name="black-bar"></div>
                </div>
            </div>

            <div id="content03" className="w3-rows">
                <div id="c03-01" name="box" className="w3-third w3-margin-bottom">
                    <img src="images/image05.jpg"/>
                    <div id="c03-02" name="box" className="w3-third w3-container w3-margin-bottom">
                        <div className="w3-container">
                            <h1><b>든든한 솥밥을 위해<br/>한솥이 지키고,<br/>키워가는 것들</b></h1>
                            &nbsp;
                            <br/>
                            <p>
                                한솥은 '따끈한 도시락으로 지역사회에 공헌한다' 라는<br/>기업이념 아래,
                                고객 이익을 최우선으로 하며 엄선된<br/>좋은 식재료만 사용하는
                                대한민국 외식종합기업 시장을<br/>리드하는 글로벌 종합외식기업 입니다.
                            </p>
                            <br/>
                            <button>브랜드 철학</button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="content04" className="w3-row-padding">
                    <div id="c04-01" name="box" className="w3-third w3-container w3-margin-bottom">
                        <img src="images/image06.jpg"/>
                    </div>
                    <div id="c04-02" name="box" className="w3-third w3-container w3-margin-bottom">
                    <a href="#" onMouseOver={showYellow} onMouseLeave={hideYellow}>
                        <div className="w3-container">
                            <h1><b>식재료 앞에서는<br/>한없이<br/>까탈스럽습니다</b></h1>
                            <br/>
                            <p>
                                맑고 깨끗한 자연 환경속에서 재배된 식재료가 아니면
                                한솥이 될 수 없습니다. 모든 식재료는 고객분들이 안심하고
                                드실 수 있도록 엄격한 기준 아래 선별됩니다.
                            </p><br/>
                            <button>식재료이야기</button>
                        </div></a>
                        <br/>
                        <div name="yellow-bar"></div>
                        <div name="black-bar"></div>
                </div>
            </div>

            <div id="content05" className="w3-row-padding">
                <h4><b>더 많은 이야기</b></h4>
                <br/>
                <div className="w3-third w3-container w3-margin-bottom">
                    <img src="images/image07.jpg"/>
                    <div className="w3-container w3-white">
                        <p>한솥의 약속</p>
                    </div>
                </div>
                <div className="w3-third w3-container w3-margin-bottom">
                    <img src="images/image08.jpg"/>
                    <div className="w3-container w3-white">
                        <p>온라인 이벤트</p>
                    </div>
                </div>
                <div className="w3-third w3-container w3-margin-bottom">
                    <img src="images/image09.jpg"/>
                    <div className="w3-container w3-white">
                        <p>한솥 NEWS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent;