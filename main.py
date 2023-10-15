def on_button_a():
    global monitoring
    serial.write_line("starte Aufzeichnung")
    serial.write_line("Daten: Lichtstärke Lautstärke")
    monitoring += 1
    led.enable(True)
    led.plot(0, 4)
    basic.set_led_color(0x00ff00)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_ab():
    for index in range(100):
        serial.write_string("SOS ")
    serial.write_line("")
input.on_button_event(Button.AB, input.button_event_click(), on_button_ab)

def on_button_b():
    global monitoring
    serial.write_line("stoppe Aufzeichnung")
    monitoring = 0
    led.unplot(0, 4)
    led.enable(False)
    basic.turn_rgb_led_off()
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

monitoring = 0
serial.write_line("gestartet")
monitoring = 0

def on_every_interval():
    if monitoring != 0:
        serial.write_string("Daten: ")
        serial.write_number(input.light_level())
        serial.write_string(" ")
        serial.write_number(input.sound_level())
        serial.write_line(" ")
loops.every_interval(500, on_every_interval)

def on_forever():
    pass
basic.forever(on_forever)
