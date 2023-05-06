radio.onReceivedString(function (receivedString) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    led.plotBarGraph(
    Math.map(signal, -95, -42, 0, 9),
    9
    )
})
let signal = 0
radio.setGroup(1)
basic.forever(function () {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) == -128 || radio.receivedPacket(RadioPacketProperty.SignalStrength) < -81) {
        music.stopAllSounds()
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) == -80 || radio.receivedPacket(RadioPacketProperty.SignalStrength) < -61) {
        music.playTone(262, music.beat(BeatFraction.Half))
        basic.pause(100)
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) == -60 || radio.receivedPacket(RadioPacketProperty.SignalStrength) < -41) {
        music.playTone(349, music.beat(BeatFraction.Half))
        basic.pause(100)
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) == -40 || radio.receivedPacket(RadioPacketProperty.SignalStrength) < -28) {
        music.playTone(880, music.beat(BeatFraction.Half))
        basic.pause(100)
    }
})
