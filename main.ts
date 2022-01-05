let calculo = 0
let calculo2 = 0
basic.forever(function () {
    calculo = randint(0, 100)
    calculo2 = randint(0, 100)
    basic.showNumber(calculo)
    basic.showString("x")
    basic.showNumber(calculo2)
    basic.showString("=")
    basic.showNumber(calculo * calculo2)
    basic.showString("_")
})
