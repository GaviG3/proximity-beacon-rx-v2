radio.onReceivedString(function (receivedString) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (signal < -128) {
        music.stopAllSounds()
        basic.showIcon(IconNames.No)
    } else if (signal < -75) {
        music.playTone(262, music.beat(BeatFraction.Half))
        basic.pause(1000)
        basic.showIcon(IconNames.Square)
    } else if (signal < -44) {
        music.playTone(349, music.beat(BeatFraction.Half))
        basic.pause(300)
        basic.showIcon(IconNames.Diamond)
    } else if (signal < -28) {
        music.playTone(988, music.beat(BeatFraction.Quarter))
        basic.pause(50)
        basic.showIcon(IconNames.SmallDiamond)
    }
})
let signal = 0
radio.setGroup(1)
basic.forever(function () {
	
})
basic.forever(function () {
	
})
