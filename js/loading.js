$(document).ready(function () {
    //頁面載入進度條效果
    $('.progress').fadeOut(1000, function () {
        $('.Content').fadeIn(2000);
    });

    //swiper
    //滚动元素id，左切换按钮，右切换按钮，切换元素个数id,滚动方式，切换方向，是否自动滚动，滚动距离，滚动时间，滚动间隔，显示个数
    LbMove('BoxUl', 'btnl', 'btnr', 'BoxSwitch', true, 'left', true, 305, 1000, 2000, 4);

});