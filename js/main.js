$(document).ready(function () {
    $(".header__menu-open").click(() => {
        $(".nav").css("transform", "translateX(0)");
        $(".header__menu-open").toggle();
        $(".header__menu-close").toggle();
    });

    $(".header__menu-close").click(() => {
        $(".nav").css("transform", "translateX(100%)");
        $(".header__menu-open").toggle();
        $(".header__menu-close").toggle();
    });
});
