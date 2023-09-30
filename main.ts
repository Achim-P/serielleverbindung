input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    serial.writeLine("A gedrückt")
})
serial.writeLine("gestartet")
basic.forever(function () {
	
})
