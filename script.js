$(document).ready(function () {


    $('.container').mousemove(function (e) {

        var x = e.pageX + 'px';
        var y = e.pageY + 'px';

        $('.cursor').css({ 'top': y, 'left': x });

    });

    var images = new Array('food_img1.jpg', 'food_img2.jpg', 'food_img3.jpg', 'food_img4.jpg', 'food_img5.jpg');

    setInterval(function () {

        var random = images[Math.floor(Math.random() * images.length)];
        $('.image').css('background', 'url(' + random + ')');

    }, 2500);

});