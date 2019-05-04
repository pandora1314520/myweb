$(document).ready(function () {
    //滾動監控 offset:100距離
    $('body').scrollspy({ target: '#navbarSupportedContent', offset: 400 });

    //導覽列背景美化
    $(document).scroll(function () { //開始捲動

        //01如果捲軸拉到了最上方，按鈕淡出
        if ($(this).scrollTop()) {
            $('#toTop').fadeIn();
        } else {//如果捲軸拉開了最上方，按鈕淡入
            $('#toTop').fadeOut();
        }

        if ($(this).scrollTop() > ($("#Service").offset().top) - 99) { //如果視窗的捲動到了#about區塊的上方

            $("#navbar_Scrollspy").css('transition', 'background 0.5s linear');//背景顏色淡入
            $("#navbar_Scrollspy").css('background-color', '#c7b512cc');
        } else {//如果視窗的捲動沒有到了#about區塊的上方
            $("#navbar_Scrollspy").css('background-color', '#ffc107');

        }
    });

    //選單點選滑動效果
    $("#navbar_Scrollspy li a[href^='#']").on('click', function (e) {

        // hash是設定連結#字後面的文字內容
        var target;
        target = this.hash;

        // 連結效果取消
        e.preventDefault();

        // 將導覽列的高度儲存在navOffset變數裡
        var navOffset;
        navOffset = $('#navbar_Scrollspy').height();

        // 捲軸滑動開始
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - navOffset
        }, 600, function () {

            // 增加#字後面的文字內容到URL的最後面
            return window.history.pushState(null, null, target);

        });

    });
    //01點選按鈕頁面自動捲到最上方
    $("#toTop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });


});

