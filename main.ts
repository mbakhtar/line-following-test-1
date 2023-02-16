basic.showIcon(IconNames.Heart)
modules.servo1.setEnabled(true)
modules.servo2.setEnabled(true)
modules.servo3.setEnabled(true)
basic.forever(function () {
    basic.showNumber(myModules.reflectedLight2.brightness())
    if (myModules.reflectedLight2.brightness() > 50) {
        modules.servo1.setAngle(0)
        modules.servo2.setAngle(0)
        modules.servo3.setAngle(0)
        basic.pause(1000)
    }
    if (myModules.reflectedLight2.brightness() < 50) {
        modules.servo1.setAngle(90)
        modules.servo2.setAngle(90)
        modules.servo3.setAngle(90)
        basic.pause(1000)
    }
})
