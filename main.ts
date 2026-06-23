input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        Tinybit.Music_Car(Tinybit.enMusic.birthday)
    }
    basic.showLeds(`
        . # # # .
        # . # . #
        # # # # #
        # . # . #
        . . . . .
        `)
    basic.showString("theo")
})
makerbit.onIrButton(IrButton.Light, IrButtonAction.Pressed, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Pinkish)
    basic.pause(1000)
    Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
    basic.pause(1000)
    Tinybit.RGB_Car_Big(Tinybit.enColor.Yellow)
    basic.pause(1000)
    Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
    basic.pause(1000)
    Tinybit.RGB_Car_Big(Tinybit.enColor.Cyan)
    basic.pause(2000)
    Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
    basic.pause(1000)
    Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
})
makerbit.onIrButton(IrButton.NUM9, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_SpinLeft)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Right)
    basic.pause(100)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Left)
    basic.pause(100)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Back)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    basic.showArrow(ArrowNames.North)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 4; index++) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Chase), music.PlaybackMode.InBackground)
    }
})
makerbit.onIrButton(IrButton.Power, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.NUM1, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Right)
})
makerbit.onIrButton(IrButton.NUM0, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Left)
    basic.pause(200)
    led.plotBarGraph(
    0,
    10,
    true
    )
    basic.pause(2000)
})
makerbit.onIrButton(IrButton.Plus, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . # # . .
        # . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        # . . # .
        . . # . .
        . # . . .
        # # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
})
makerbit.connectIrReceiver(DigitalPin.P8)
loops.everyInterval(0, function () {
	
})
