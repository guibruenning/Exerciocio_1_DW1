function log(msg) {
    console.log(msg)
}

function randomFunction() {
    return Math.ceil(Math.random() * (0 - 6) + 6)
}

function switchImage() {
    var image = $(".dice")
    count = 0
    while (count < 10) {
        image.animate({
            opacity: 0.5
        }, 15)
        image.animate({
            opacity: 1
        }, 15, () => {
            image.css("background-image", 'url(./img/icons/dice_' + randomFunction() + '.png)')
        })
        count++;
    }
}