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
}

function dices(position) {
    if ($(".dice.hide" + position).length != 0) {
        $(".dice.hide" + position).removeClass("hide")
    }
    switch (position) {
        case ".um":
            ran_1 = randomFunction()
            log("1 " + ran_1)

            $(".dice" + position).css("background-image", 'url(./img/icons/dice_' + ran_1 + '.png)')
            break
        case ".dois":
            ran_2 = randomFunction()
            log("2 " + ran_2)
            $(".dice" + position).css("background-image", 'url(./img/icons/dice_' + ran_2 + '.png)')
            break
        case ".tres":
            ran_3 = randomFunction()
            log("3 " + ran_3)
            $(".dice" + position).css("background-image", 'url(./img/icons/dice_' + ran_3 + '.png)')
            break
        case ".quatro":
            ran_4 = randomFunction()
            log("4 " + ran_4)
            $(".dice" + position).css("background-image", 'url(./img/icons/dice_' + ran_4 + '.png)')
            break
        default:
            console.error("erro")
            break
    }

    switchImage(position)
}

function winner() {
    ran_player = ran_1 + ran_2
    ran_computer = ran_3 + ran_4
    log(ran_1)
    log(ran_2)
    if (ran_player > ran_computer)
        return "Jogador"
    else
        return "Computador"
}