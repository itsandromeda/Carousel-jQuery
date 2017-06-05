/*global $, setInterval*/

$(() => {
    var carouselList = $("#images ul"),
        currSlide = 0,
        pointer = $('.controls i');

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
        moveIndicator(true);
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
        moveIndicator(false);
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

    function moveIndicator(direction) {
        var active = $('.controls .fa-circle'),
            way,
            which;
        if (direction) {
            way = active.next();
        } else {
            way = active.prev();
        }
        if (direction) {
            which = "first";
        } else {
            which = "last";
        }
        if (way.length === 0) {
            way = $('.controls i')[which]();
        }

        way.addClass('fa-circle').removeClass('fa-circle-o');
        active.removeClass('fa-circle').addClass('fa-circle-o');
    }

    pointer.on('click', function () {
        var clicker = parseInt($(this).attr('data-slide-to')),
            step = clicker - currSlide,
            i;

        if (step === 0) {
            return false;
        } else if (step > 0) {
            for (i = 0; i < step; i += 1) {
                pointerSlideNext();
            }
        } else {
            for (i = 0; i < Math.abs(step); i += 1) {
                slidePrev(0);
            }
        }
    });

    function pointerSlideNext() {
        if (currSlide === 4) {
            currSlide = 0;
        } else {
            currSlide += 1;
        }
        carouselList.animate({
            'marginLeft': -800
        }, 0, moveFirstSlide);
        moveIndicator(true);
    };
});