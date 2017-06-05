/*global $, setInterval*/

$(() => {
    var carouselList = $("#images ul"),
        currSlide = 0;

    setInterval(slideNext, 5000);

    $(".next").on('click', function () {
        slideNext();
    });

    $(".prev").on('click', function () {
        slidePrev();
    });

    function slideNext() {
        if (currSlide === 4) {
            currSlide = 0;
        } else {
            currSlide += 1;
        }
        carouselList.animate({
            'marginLeft': -800
        }, 500, moveFirstSlide);
    }

    function slidePrev() {
        if (currSlide === 0) {
            currSlide = 4;
        } else {
            currSlide -= 1;
        }
        moveLastSlide();
        carouselList.animate({
            'marginLeft': 0
        }, 500);
    }

    function getFirstItem() {
        return carouselList.find('li:first');
    }

    function getLastItem() {
        return carouselList.find('li:last');
    }

    function moveFirstSlide() {
        getLastItem().after(getFirstItem());
        carouselList.css({
            'marginLeft': 0
        });
    }

    function moveLastSlide() {
        getFirstItem().before(getLastItem());
        carouselList.css({
            marginLeft: -800
        });
    }
});