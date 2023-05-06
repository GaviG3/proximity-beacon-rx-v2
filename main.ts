radio.onReceivedString(function (receivedString) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    led.plotBarGraph(
    Math.map(signal, -95, -42, 0, 9),
    9
    )
    if (signal < -128) {
        music.stopAllSounds()
    } else if (signal < -90) {
        music.playTone(262, music.beat(BeatFraction.Half))
        basic.pause(1000)
    } else if (signal < -50) {
        music.playTone(349, music.beat(BeatFraction.Half))
        basic.pause(300)
    } else if (signal < -28) {
        music.playTone(988, music.beat(BeatFraction.Half))
        basic.pause(75)
    }
})
let signal = 0
radio.setGroup(1)
basic.forever(function () {
	
})
basic.forever(function () {
	
})
