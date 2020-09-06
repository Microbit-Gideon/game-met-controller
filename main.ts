WSJoyStick.onKey(KEY.F, function () {
    Player.change(LedSpriteProperty.X, -1)
})
WSJoyStick.onKey(KEY.E, function () {
    Player.change(LedSpriteProperty.Y, 1)
})
WSJoyStick.onKey(KEY.D, function () {
    Player.change(LedSpriteProperty.X, 1)
})
WSJoyStick.onKey(KEY.C, function () {
    Player.change(LedSpriteProperty.Y, -1)
})
let list: game.LedSprite[] = []
let Deleted_sprite = 0
let Direction2 = 0
let Sprite_5: game.LedSprite = null
let Sprite_4: game.LedSprite = null
let Sprite_3: game.LedSprite = null
let Sprite_2: game.LedSprite = null
let Sprite_1: game.LedSprite = null
let Player: game.LedSprite = null
Player = game.createSprite(2, 2)
basic.forever(function () {
    if (Player.isTouching(Sprite_1) || (Player.isTouching(Sprite_2) || Player.isTouching(Sprite_3) || (Player.isTouching(Sprite_4) || Player.isTouching(Sprite_5)))) {
        game.gameOver()
    }
})
basic.forever(function () {
    while (game.isRunning()) {
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
        list[Deleted_sprite].delete()
        for (let index = 0; index < 4; index++) {
            basic.pause(1000)
            Sprite_1.move(1)
            Sprite_2.move(1)
            Sprite_3.move(1)
            Sprite_4.move(1)
            Sprite_5.move(1)
        }
        basic.pause(1000)
        Sprite_1.delete()
        Sprite_2.delete()
        Sprite_3.delete()
        Sprite_4.delete()
        Sprite_5.delete()
    }
})
