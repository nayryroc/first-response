$(document).ready(f => {
    $('.use-case').slick({
        appendArrows: $(".use-case__slider-controls"),
        adaptiveHeight: true,
    });

    $('.robustness-diagrams').slick({
        appendArrows: $(".robustness-diagram__slider-controls"),
        adaptiveHeight: true,
    });
});