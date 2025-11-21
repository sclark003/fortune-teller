let answer = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    answer = randint(1, 4)
    if (answer == 1) {
        basic.showString("No Way!")
    } else if (answer == 2) {
        basic.showString("Probably!")
    } else if (answer == 3) {
        basic.showString("Unlikely!")
    } else {
        basic.showString("Definitely!")
    }
})
