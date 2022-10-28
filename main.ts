input.onButtonPressed(Button.A, function () {
	
})
let new_Y = 0
let new_X = 0
let offsetPitch = 20
radio.setGroup(5)
let X = 2
let Y = 2
led.plot(X, Y)
basic.forever(function () {
    new_X = X
    new_Y = Y
    if (input.rotation(Rotation.Roll) > 45) {
        new_X = 4
    } else if (input.rotation(Rotation.Roll) > 22) {
        new_X = 3
    } else if (input.rotation(Rotation.Roll) > -22) {
        new_X = 2
    } else if (input.rotation(Rotation.Roll) > -45) {
        new_X = 1
    } else {
        new_X = 0
    }
    if (input.rotation(Rotation.Pitch) > 20 + offsetPitch) {
        new_Y = 4
    } else if (input.rotation(Rotation.Pitch) > 10 + offsetPitch) {
        new_Y = 3
    } else if (input.rotation(Rotation.Pitch) > 0 + offsetPitch) {
        new_Y = 2
    } else if (input.rotation(Rotation.Pitch) > -10 + offsetPitch) {
        new_Y = 1
    } else {
        new_Y = 0
    }
    if (new_X != X || new_Y != Y) {
        led.plot(new_X, new_Y)
        led.unplot(X, Y)
        X = new_X
        Y = new_Y
        if (input.buttonIsPressed(Button.A)) {
            radio.sendNumber(5 * Y + X)
        } else {
            radio.sendNumber((5 * Y + X) * -1)
        }
    }
    basic.pause(200)
})
