input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    serial.writeLine("starte Aufzeichnung")
    serial.writeLine("Daten: Lichtstärke Lautstärke")
    monitoring += 1
    led.enable(true)
    led.plot(0, 4)
    basic.setLedColor(0x00ff00)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    for (let index = 0; index < 100; index++) {
        serial.writeString("SOS ")
    }
    serial.writeLine("")
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    serial.writeLine("stoppe Aufzeichnung")
    monitoring = 0
    led.unplot(0, 4)
    led.enable(false)
    basic.turnRgbLedOff()
})
let monitoring = 0
serial.writeLine("gestartet")
monitoring = 0
loops.everyInterval(500, function () {
    if (monitoring != 0) {
        serial.writeString("Daten: ")
        serial.writeNumber(input.lightLevel())
        serial.writeString(" ")
        serial.writeNumber(input.soundLevel())
        serial.writeLine(" ")
    }
})
basic.forever(function () {
	
})
