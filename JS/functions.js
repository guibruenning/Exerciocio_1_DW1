var ran_1 = 0
var ran_2 = 0
var ran_3 = 0
var ran_4 = 0

function log(msg) {
    console.log(msg)
}

function randomFunction() {
    return Math.ceil(Math.random() * (0 - 6) + 6)
}

function switchImage(position) {
    var image = $(".dice" + position)

    count = 0
    while (count < 30) {
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
    return
}

function setRan(ran_1, ran_2, ran_3, ran_4) {
    this.ran_1 = ran_1

    this.ran_2 = ran_2

    this.ran_3 = ran_3

    this.ran_4 = ran_4
}

function dices(position) {
    if ($(".dice.hide" + position).length != 0) {
        $(".dice.hide" + position).removeClass("hide")
    }
    switchImage(position)

    setTimeout(function() {

        switch (position) {
            case ".um":
                log("1 " + ran_1)
                $(".dice" + position).css("background-image", 'url(./img/icons/dice_' + ran_1 + '.png)')
                break
            case ".dois":
                log("2 " + ran_2)
                $(".dice" + position).css("background-image", 'url(./img/icons/dice_' + ran_2 + '.png)')
                break
            case ".tres":
                log("3 " + ran_3)
                $(".dice" + position).css("background-image", 'url(./img/icons/dice_' + ran_3 + '.png)')
                break
            case ".quatro":
                log("4 " + ran_4)
                $(".dice" + position).css("background-image", 'url(./img/icons/dice_' + ran_4 + '.png)')
                break
            default:
                console.error("erro")
                break
        }
    }, 1500)


}

function winner() {
    ran_player = ran_1 + ran_2
    ran_computer = ran_3 + ran_4
    log(ran_computer)
    log(ran_player)
    if (ran_player > ran_computer)
        return "Jogador"
    if (ran_player < ran_computer)
        return "Computador"
    else
        return "Impate"
}