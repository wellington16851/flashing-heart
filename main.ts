input.onButtonPressed(Button.A, function () {
    basic.showString("wellington")
})
input.onSound(DetectedSound.Loud, function () {
    music.stopAllSounds()
    music.setVolume(255)
    music.setTempo(500)
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    music.play(music.createSoundExpression(WaveShape.Noise, 1580, 0, 255, 225, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    kitronik_motor_driver.stepperMotorTurnSteps(kitronik_motor_driver.MotorDirection.Forward, 29)
    led.plotBarGraph(
    100000000000000000000,
    1e+24
    )
    music.setBuiltInSpeakerEnabled(true)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 315), music.PlaybackMode.UntilDone)
})
