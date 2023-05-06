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
	
})
basic.forever(function () {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) <= -128) {
        music.stopAllSounds()
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) <= -91) {
        music.playTone(175, music.beat(BeatFraction.Half))
        basic.pause(1000)
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) <= -71) {
        music.playTone(349, music.beat(BeatFraction.Half))
        basic.pause(300)
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) <= -50) {
        music.playTone(988, music.beat(BeatFraction.Half))
        basic.pause(75)
    }
})
