controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
    mySprite.startEffect(effects.spray, 200)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 d f f . . 
    . . f d d f 3 5 5 3 f d d f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . f 3 3 5 3 3 5 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
info.startCountdown(10)
