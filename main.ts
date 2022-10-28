input.onButtonPressed(Button.A, function () {
    radio.sendNumber(5 * Y + X)
})
let Y = 0
let X = 0
radio.setGroup(5)
X = 2
Y = 2
led.plot(X, Y)
basic.forever(function () {
	
})
