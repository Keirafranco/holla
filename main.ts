input.onButtonPressed(Button.A, function () {
    radio.sendString("keira")
    basic.showIcon(IconNames.Heart)
    basic.pause(200)
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
