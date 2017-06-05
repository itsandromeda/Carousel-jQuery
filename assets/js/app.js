$(() => {
    var carouselList = $("#images ul"),
        currSlide = 0;

    setInterval(slideNext, 5000);

    $(".next").on('click', function () {
        slideNext()
    });

    function slideNext() {
        if (currSlide === 4) {
            currSlide = 0;
        } else {
            currSlide + 1;
        }
        carouselList.animate({
            'marginLeft': -800
        }, 500, moveFirstSlide);
    }

    function moveFirstSlide() {
        getLastItem().after(getFirstItem());
        carouselList.css({
            'marginLeft': 0
        });
    }

    function getFirstItem() {
        return carouselList.find('li:first');
    }

    function getLastItem() {
        return carouselList.find('li:last');
    }

});