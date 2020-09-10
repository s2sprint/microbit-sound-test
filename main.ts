input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Half))
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C D E C D E G E ", 120)
})
basic.forever(function () {
	
})
