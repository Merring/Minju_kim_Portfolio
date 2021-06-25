$(document).ready(function () {

    let angle = 0;
    let moveMail = 0;
    let moveLogo = -100;


    //메인 첫 화면 이벤트
    $(window).scroll(function () {
        const $sct = $(window).scrollTop();

        console.log($sct);
        if ($sct > 260) {
            moveMail = 172;
            angle = 90;
            $("#logo").addClass("active");
        } else if ($sct <= 260) {
            moveMail = $sct * 0.6;
            angle = $sct * 0.35;
            $("#logo").removeClass("active");
        }



        $(".top_txt h4").css("opacity", 1 - ($sct * 0.004));
        $(".bottom_txt p").css("opacity", 1 - ($sct * 0.004));
        $(".top_txt p").css("transform", "translateX(" + moveMail + "px) rotate(" + angle + "deg)");
        //$("#logo").css("transform", "translateX("+moveLogo +"%)");

    });



    //상단 로고 이미지 메뉴 기능
    $("#logo img").click(function(){
        const logoActive = $(this).hasClass("active");
        if (logoActive == true){
            $(this).removeClass("active");
            $("#logo h2").css("display", "block");
            $("#logo nav").slideUp(0);
        }else{
            $(this).addClass("active");
            $("#logo h2").css("display", "none");
            $("#logo nav").slideDown(0);
        };




    });


    function menuEvt(){
        const screen = $(window).width();
        console.log(screen);
        if(screen<=639){
            $("#logo .menu_icon").hide();
            $("#logo nav").show();
            setTimeout(function () {
                $("#logo h2").show(0);
                $("#logo nav").show(0);
            }, 1000);
        }else{
            $("#logo .menu_icon").show();
            $("#logo nav").hide();
            setTimeout(function () {
                $("#logo h2").show(0);
                $("#logo nav").hide(0);
            }, 1000);
        }
    }
    menuEvt();


    $("#logo nav .menu li").click(function () {
        const $index = $(this).index();
        $("html, body").animate({ scrollTop: $("section").eq($index).offset().top }, 1000);
        menuEvt();
        return false;
    });

    
    
    $(window).resize(function(){
        menuEvt();
    });





    // Skills Part 이미지 배열
    /*
    const skill_list = [
        ["html.png", "90"],
        ["css.png", "85"],
        ["javascript.png", "85"],
        ["photoshop.png", "90"],
        ["illustrator.png", "95"],
        ["ms_office.png", "90"],
        ["rhinoceros.png", "95"],
        ["fusion360.png", "95"]
    ];

    const skill_cont = `
    <div class="frame">
        <div class="img img1">
            <div class="color">
                    <div class="text_box">
                        <p class="score"><span>90</span>%</p>
                    </div>
            </div>
        </div>
    </div>
    `;

    for(i=0; i<skill_list.length; i++){
        $(".skill_list .wrap").append(skill_cont);
    }
 
    $("#skills .frame").each(function(i){
        $(this).find(".img").css("background-image", "url(./img/"+skill_list[i][0]+")");
        $(this).find(".score span").text(skill_list[i][1]);
    });
    */








    //작품 컨텐츠 배열

    const works_list = [
        ["web_Kuliner.png", "Kuliner 레스토랑 웹사이트", "레스토랑 웹사이트를 작업해 보았습니다! wow js 효과를 사용해서 스크롤 애니메이션을 적용했습니다.", "https://merring.github.io/kuliner/"],
        ["web_Hospital.png", "세종 병원 웹사이트", "병원 웹사이트를 작업해 보았습니다! 환자들이 원하는 정보를 빠르게 찾을 수 있도록 필요한 기능들을 깔끔하게 배치하여 만들었어요.", "https://merring.github.io/hospital/"],
        ["web_Cashmere.png", "Cashmere 웹사이트", "여성 의류 브랜드 사이트를 작업해 보았습니다! 브랜드 이름에 맞는 부드럽고 따뜻한 이미지의 느낌을 주는 사이트로 제작해 봤어요.", "https://merring.github.io/cashmere/"],
        ["web_InvestPlan.png", "InvestPlan 웹사이트", "투자 회사 웹 사이트를 작업해 보았습니다! 신뢰감을 줄 수 있는 깔끔하고 건실한 기업의 이미지를 살려서 제작해 보았어요.", "https://merring.github.io/InvestPlan/"],
        ["web_Wedding.png", "Wedding 웹사이트", "웨딩 웹 사이트를 작업해 보았습니다! 새로운 시작의 떨림과 수줍은 마음, 싱그럽게 피어나는 꽃과 같은 이미지를 상상하면서 만들어 보았습니다.", "https://merring.github.io/wedding/"],
        ["web_BnO_Play.png", "B&O Play 웹사이트", "세계적인 음향기기 회사인 B&O 브랜드의 제품 사이트를 작업해보았어요! 고급스러우면서도 심플한 디자인이 돋보이는 제품들처럼 웹 사이트도 간결하지만 고급스러운 무게감을 전해줄 수 있도록 제작해 보았습니다.", "https://merring.github.io/bno-play/"],
        ["web_Inspace.png", "인테리어 회사 웹사이트", "인테리어 회사의 웹사이트를 작업해 보았어요! 모던하면서 여러가지 콘텐츠를 감각적으로 보여줄 수 있는 웹 사이트로 만들어 보았습니다.", "https://merring.github.io/Inspace/"],
        ["res_Roleplay.png", "[반응형] 극예술 연구회 웹사이트", "극예술 연구회라는 연극 웹사이트를 작업했습니다! 반응형 웹사이트로서 다양한 기종, 환경에서도 문제없이 구동될 수 있도록 하였습니다.", "https://merring.github.io/theaterlap/"],
        ["res_Origin.png", "[반응형] Origin 포트폴리오 웹사이트", "Origin이라는 포트폴리오 작품들을 소개하는 웹 사이트를 작업해 보았습니다! 반응형 웹사이트로서 다양한 기종, 환경에서도 문제없이 구동될 수 있도록 하였습니다.", "https://merring.github.io/Origin/"],
        ["res_Ajax_webpage.png", "[반응형] 장사리 전투 웹사이트", "Ajax를 이용하여 장사리 전투라는 영화를 소개하는 웹 사이트 작업을 하였습니다! 반응형 웹사이트로서 다양한 기종, 환경에서도 문제없이 구동될 수 있도록 하였습니다.", "https://merring.github.io/ajax_website/"],
        ["res_Weather_App.png", "[반응형] 날씨 앱 웹사이트", "현재 위치에 따른 날씨 정보를 받아오거나, 지역을 검색하여 검색한 지역의 날씨 정보를 볼 수 있는 날씨 앱 사이트를 만드는 작업을 하였습니다! 반응형 웹사이트로서 다양한 기종, 환경에서도 문제없이 구동될 수 있도록 하였습니다.", "https://merring.github.io/weather/"],
        ["php_website.png", "[PHP / Mysql] PHP를 이용한 교육 웹사이트", "PHP와 Mysql을 이용하여 교육 웹사이트를 구축하는 작업을 해 보았습니다! 회원가입 후 다른 회원에게 메세지를 보내거나, 게시판에 글을 올리거나 마음에 드는 교육 과정에 좋아요 표시도 가능합니다! 아, 열심히 활동을 하면 회원 포인트도 차곡차곡 쌓인답니다!!!", "mindy000.dothome.co.kr/website"],
        ["php_mychat.png", "[PHP / Mysql] PHP를 이용한 채팅 앱 웹사이트", "PHP와 Mysql을 이용하여 채팅 앱과 같은 느낌의 웹 사이트를 만드는 작업을 하였습니다! 회원끼리 채팅 메시지를 주고 받을 수 있으며, 전송된 메시지 삭제도 가능합니다.", "mindy000.dothome.co.kr/chat"],
    ];

    const works_cont = `
        <li class="slide_0" data-rel="0"><a href=""></a></li>
    `;
    const works_txt = `
        <h4 class="">Title : <span>제목</span></h4>
        <p><span>설명</span></p>
    `;

    for (i = 0; i < works_list.length; i++) {
        $(".slide_frame .slides").append(works_cont);
    };

    $("#works .slides li").each(function (i) {
        $(this).attr({ "class": "slide_" + i, "rel": i });
        $(this).css("background-image", "url(./img/works_banner/" + works_list[i][0] + ")");
    });





    //이메일 전송 팝업창 닫기
    $(".close").click(function () {
        $(".thankyou_message").hide();

        return false;
    });







    //작품 컨텐츠 슬라이드

    $(".slides").slick({
        infinite: true,  //무한 루프
        autoplay: true,  //자동 전환
        pauseOnHover: true,  //마우스 오버시 일시정지
        vertical: true,   //수직방향 슬라이드 전환
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,  //슬라이드 파트에서 중앙 위치를 인식(.slick-center)
        centerPadding: "0px",  //센터에서 간격을 조정
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {

                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });


    let cur_rel;

    setInterval(function () {
        cur_rel = $(".slick-center").attr("rel");
        //console.log("현재 슬라이드의 rel num : " + cur_rel);
        $(".works_title span").text(works_list[cur_rel][1]);
        $(".works_context span").text(works_list[cur_rel][2]);
        $(".works_link").attr("href", works_list[cur_rel][3]);
    }, 1000);

});