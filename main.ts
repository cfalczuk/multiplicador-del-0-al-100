let calculo = 0
let calculo2 = 0
input.onButtonPressed(Button.A, function () {
    calculo = randint(0, 100)
    calculo2 = randint(0, 100)
    basic.showNumber(calculo)
    basic.showString("x")
    basic.showNumber(calculo2)
    basic.showString("=")
    basic.showNumber(calculo * calculo2)
    basic.pause(500)
    basic.showString("_")
    basic.pause(500)
})
input.onGesture(Gesture.Shake, function () {
    calculo = randint(0, 100)
    calculo2 = randint(0, 100)
    basic.showNumber(calculo)
    basic.showString("-")
    basic.showNumber(calculo2)
    basic.showString("=")
    basic.showNumber(calculo - calculo2)
    basic.pause(500)
    basic.showString("_")
    basic.pause(500)
})
input.onButtonPressed(Button.AB, function () {
    calculo = randint(0, 100)
    calculo2 = randint(0, 100)
    basic.showNumber(calculo)
    basic.showString("+")
    basic.showNumber(calculo2)
    basic.showString("=")
    basic.showNumber(calculo + calculo2)
    basic.pause(500)
    basic.showString("_")
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    calculo = randint(0, 100)
    calculo2 = randint(0, 100)
    basic.showNumber(calculo)
    basic.showString("\\")
    basic.showNumber(calculo2)
    basic.showString("=")
    basic.showNumber(calculo + calculo2)
    basic.pause(500)
    basic.showString("_")
    basic.pause(500)
})
