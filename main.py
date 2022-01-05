calculo = 0
calculo2 = 0

def on_button_pressed_a():
    global calculo, calculo2
    calculo = randint(0, 100)
    calculo2 = randint(0, 100)
    basic.show_number(calculo)
    basic.show_string("x")
    basic.show_number(calculo2)
    basic.show_string("=")
    basic.show_number(calculo * calculo2)
    basic.pause(500)
    basic.show_string("_")
    basic.pause(500)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global calculo, calculo2
    calculo = randint(0, 100)
    calculo2 = randint(0, 100)
    basic.show_number(calculo)
    basic.show_string("\\")
    basic.show_number(calculo2)
    basic.show_string("=")
    basic.show_number(calculo + calculo2)
    basic.pause(500)
    basic.show_string("_")
    basic.pause(500)
input.on_button_pressed(Button.B, on_button_pressed_b)
