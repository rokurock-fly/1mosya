//ヘッダー右側　ドロップダウンメニュー　//
$(function() {
    $(".js_bar_1").hover(
        function() {
            $(".js_subbtn__1").slideDown(250)
        },
        function() {
            $(".js_subbtn__1",).slideUp(30);
        });
});

$(function() {
    $(".js_bar_2").hover(
        function() {
            $(".js_subbtn__2").slideDown(250)
        },
        function() {
            $(".js_subbtn__2",).slideUp(30);
        }
    );
});

$(function() {
    $(".js_bar_3").hover(
        function() {
            $(".js_subbtn__3").slideDown(250)
        },
        function() {
            $(".js_subbtn__3",).slideUp(30);
        }
    );
});

$(function() {
    $(".js_bar_4").hover(
        function() {
            $(".js_subbtn__4").slideDown(250)
        },
        function() {
            $(".js_subbtn__4",).slideUp(30);
        }
    );
});

$(function() {
    $(".js_bar_5").hover(
        function() {
            $(".js_subbtn__5").slideDown(250)
        },
        function() {
            $(".js_subbtn__5",).slideUp(30);
        }
    );
});

$(function() {
    $(".js_bar_6").hover(
        function() {
            $(".js_subbtn__6").slideDown(250)
        },
        function() {
            $(".js_subbtn__6",).slideUp(30);
        }
    );
});

// ハンバーガーボタン　クラスの切り替え

$(function(){
    $(".hamburger-btn").click(function(){
        $(this).toggleClass('open');
    });
});

//ハンバーガーメニュー　ドロップダウンメニュー　スクリプト//

$('.hm-main-list').hover(
    function(){
        $('.hm-sub-list').slideDown(250);
    },
    function(){
        $('.hm-sub-list').hide();
    },
);

$('.hm-main-list2').hover(
    function(){
        $('.hm-sub-list2').slideDown(250);
    },
    function(){
        $('.hm-sub-list2').hide();
    }
);

$('.hm-main-list3').hover(
    function(){
        $('.hm-sub-list3').slideDown(250);
    },
    function(){
        $('.hm-sub-list3').hide();
});

$('.hm-main-list4').hover(
    function(){
        $('.hm-sub-list4').slideDown(250);
},
    function(){
        $('.hm-sub-list4').hide();
});

$('.hm-main-list5').hover(
    function(){
        $('.hm-sub-list5').slideDown(250);
},
    function(){
$('.hm-sub-list5').hide();
});

$('.hm-main-list6').hover(
    function(){
        $('.hm-sub-list6').slideDown(250);
},
    function(){
        $('.hm-sub-list6').hide();
});


//ハンバーガーメニュー ±ボタン//

$('.hm-main-list').hover(
    function(){
        $(this).addClass('b-display');
    },
    function(){
        $(this).removeClass('b-display');
    },
);

$('.hm-main-list2').hover(
    function(){
        $(this).addClass('b-display');
    },
    function(){
        $(this).removeClass('b-display');
    },
);

$('.hm-main-list4').hover(
    function(){
        $(this).addClass('b-display');
    },
    function(){
        $(this).removeClass('b-display');
    },
);

$('.hm-main-list5').hover(
    function(){
        $(this).addClass('b-display');
    },
    function(){
        $(this).removeClass('b-display');
    }
);

$('.hm-main-list6').hover(
    function(){
        $(this).addClass('b-display');
    },
    function(){
        $(this).removeClass('b-display');
    },
);



//ハンバーガーメニュー　±ボタン//

$('.hm-main-list').hover(
    function(){
        $(this).removeClass('m-open');
    },
    function(){
        $(this).addClass('m-open');
    },
);

$('.hm-main-list2').hover(
    function(){
        $(this).removeClass('m-open');
    },
    function(){
        $(this).addClass('m-open');
    },
);

$('.hm-main-list4').hover(
    function(){
        $(this).removeClass('m-open');
    },
    function(){
        $(this).addClass('m-open');
    },
);

$('.hm-main-list5').hover(
    function(){
        $(this).removeClass('m-open');
    },
    function(){
        $(this).addClass('m-open');
    },
);

$('.hm-main-list6').hover(
    function(){
        $(this).removeClass('m-open');
    },
    function(){
        $(this).addClass('m-open');
    },
);



//ハンバーガーメニュー　画面768px//

$('.hamburger-btn').click(
    function(){
        $(this).toggleClass('active');
        $('.hamburger-menu').slideToggle(250); 
});



//ハンバーガーメニュー　画面768pxリセット//

$(window).on('resize', 
    function () { 
    if (window.matchMedia('(min-width:768px)').matches) { 
        $(".hamburger-menu").slideUp(200); 
        $('.hamburger-btn').removeClass('open');
    } 
});