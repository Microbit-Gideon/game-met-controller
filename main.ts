WSJoyStick.onKey(KEY.F, function () {
    Player.change(LedSpriteProperty.X, -1)
})
WSJoyStick.onKey(KEY.A, function () {
    game.pause()
})
WSJoyStick.onKey(KEY.E, function () {
    Player.change(LedSpriteProperty.Y, -1)
})
WSJoyStick.onKey(KEY.D, function () {
    Player.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
WSJoyStick.onKey(KEY.B, function () {
    game.resume()
})
WSJoyStick.onKey(KEY.C, function () {
    Player.change(LedSpriteProperty.Y, 1)
})
let list: game.LedSprite[] = []
let Deleted_sprite = 0
let Direction2 = 0
let Player: game.LedSprite = null
WSJoyStick.JoyStickInit()
Player = game.createSprite(2, 2)
let Sprite_1 = game.createSprite(0, 0)
let Sprite_2 = game.createSprite(0, 0)
let Sprite_3 = game.createSprite(0, 0)
let Sprite_4 = game.createSprite(0, 0)
let Sprite_5 = game.createSprite(0, 0)
let Snelheid = 1000
let Score = -1
game.pause()
basic.forever(function () {
    while (game.isRunning()) {
        Score += 1
        Sprite_1.delete()
        Sprite_2.delete()
        Sprite_3.delete()
        Sprite_4.delete()
        Sprite_5.delete()
        Direction2 = randint(0, 3)
        if (Direction2 == 0) {
            Sprite_1 = game.createSprite(0, 4)
            Sprite_2 = game.createSprite(1, 4)
            Sprite_3 = game.createSprite(2, 4)
            Sprite_4 = game.createSprite(3, 4)
            Sprite_5 = game.createSprite(4, 4)
        } else if (Direction2 == 1) {
            Sprite_1 = game.createSprite(0, 0)
            Sprite_2 = game.createSprite(0, 1)
            Sprite_3 = game.createSprite(0, 2)
            Sprite_4 = game.createSprite(0, 3)
            Sprite_5 = game.createSprite(0, 4)
        } else if (Direction2 == 2) {
            Sprite_1 = game.createSprite(0, 0)
            Sprite_2 = game.createSprite(1, 0)
            Sprite_3 = game.createSprite(2, 0)
            Sprite_4 = game.createSprite(3, 0)
            Sprite_5 = game.createSprite(4, 0)
        } else {
            Sprite_1 = game.createSprite(4, 0)
            Sprite_2 = game.createSprite(4, 1)
            Sprite_3 = game.createSprite(4, 2)
            Sprite_4 = game.createSprite(4, 3)
            Sprite_5 = game.createSprite(4, 4)
        }
        Sprite_1.set(LedSpriteProperty.Direction, Direction2 * 90)
        Sprite_2.set(LedSpriteProperty.Direction, Direction2 * 90)
        Sprite_3.set(LedSpriteProperty.Direction, Direction2 * 90)
        Sprite_4.set(LedSpriteProperty.Direction, Direction2 * 90)
        Sprite_5.set(LedSpriteProperty.Direction, Direction2 * 90)
        Deleted_sprite = randint(0, 4)
        list = [Sprite_1, Sprite_2, Sprite_3, Sprite_4, Sprite_5]
        list[Deleted_sprite].set(LedSpriteProperty.Brightness, 0)
        for (let index = 0; index < 4; index++) {
            basic.pause(Snelheid)
            Sprite_1.move(1)
            Sprite_2.move(1)
            Sprite_3.move(1)
            Sprite_4.move(1)
            Sprite_5.move(1)
        }
        basic.pause(Snelheid)
        Snelheid += -50
    }
})
basic.forever(function () {
    if (Player.isTouching(Sprite_1) && Deleted_sprite != 0) {
        game.setScore(Score)
        game.gameOver()
    } else if (Player.isTouching(Sprite_2) && Deleted_sprite != 1) {
        game.setScore(Score)
        game.gameOver()
    } else if (Player.isTouching(Sprite_3) && Deleted_sprite != 2) {
        game.setScore(Score)
        game.gameOver()
    } else if (Player.isTouching(Sprite_4) && Deleted_sprite != 3) {
        game.setScore(Score)
        game.gameOver()
    } else if (Player.isTouching(Sprite_5) && Deleted_sprite != 4) {
        game.setScore(Score)
        game.gameOver()
    }
})
