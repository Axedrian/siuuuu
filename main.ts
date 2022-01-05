enum RadioMessage {
    message1 = 49434
}
input.onGesture(Gesture.LogoUp, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        # . . . #
        . # # # .
        . . . . .
        . # . # .
        . . . . .
        `)
})
