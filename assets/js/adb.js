(function($) {

    $(document).ready(function() {
        var $header = $('#header');
        // 菜单切换功能
        $('.menu-icon, .close-btn').on('click', function() {
            $('.nav-container').toggleClass('active');
            $('.menu-icon, .close-btn').toggleClass('hidden');
        });
    
        // 移动端导航点击处理
        $('.nav-link, .nav-link-sub').on('click', function() {
            if (!$(this).hasClass('toggle')) {
                if ($(window).width() <= 768) {
                    $('.nav-container').removeClass('active');
                    $('.menu-icon').removeClass('hidden');
                    $('.close-btn').addClass('hidden');
                }
            }
        });
    
        // 窗口大小改变处理
        $(window).on('resize', function() {
            if ($(this).width() > 768) {
                $('.nav-container').removeClass('active');
                $('.menu-icon').removeClass('hidden');
                $('.close-btn').addClass('hidden');
            }
        });
        $header.scrollex({
            bottom: '5vh',
            enter: function() {
                $('.menu-icon').removeClass('alt');
            },
            leave: function() {
                $('.menu-icon').addClass('alt');
            }
        });
        $('.toggle').click(function() {
            var submenu = $(this).next();
            
            if (submenu.is(":visible")) {
                submenu.hide();
                $(this).children('.arrow').html('&#9654;'); // Change to right arrow
                $(this).children('.arrow').css('transform', 'rotate(0deg)'); // Reset rotation
            } else {
                submenu.show();
                $(this).children('.arrow').html('&#9660;'); // Change to down arrow
                $(this).children('.arrow').css('transform', 'rotate(90deg)'); // Rotate arrow
            }
        });
    });

})(jQuery);