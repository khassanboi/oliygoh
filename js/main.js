$(document).ready(function () {
    let toggleButton = () => {};
    $(".header__menu-open").click(() => {
        $(".nav").css("top", "56px");
        $(".header").css("box-shadow", "none");
        $(".header__menu-open").toggle();
        $(".header__menu-close").toggle();
    });

    $(".header__menu-close").click(() => {
        $(".nav").css("top", "-80%");
        $(".header").css("box-shadow", "0 0 10px rgba(0, 0, 0, 0.2)");
        $(".header__menu-open").toggle();
        $(".header__menu-close").toggle();
    });
});
