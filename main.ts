WSJoyStick.onKey(KEY.F, function () {
    Random_nummer = randint(0, 4)
    West_nummer = game.createSprite(0, Random_nummer)
    basic.pause(400)
    West_nummer.change(LedSpriteProperty.X, 1)
    while (West_nummer.get(LedSpriteProperty.X) < 4) {
        basic.pause(400)
        West_nummer.change(LedSpriteProperty.X, 1)
    }
    basic.pause(400)
    West_nummer.delete()
})
WSJoyStick.onKey(KEY.E, function () {
    Random_nummer = randint(0, 4)
    Noord_nummer = game.createSprite(Random_nummer, 0)
    basic.pause(400)
    Noord_nummer.change(LedSpriteProperty.Y, 1)
    while (Noord_nummer.get(LedSpriteProperty.Y) < 4) {
        basic.pause(400)
        Noord_nummer.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(400)
    Noord_nummer.delete()
})
WSJoyStick.onKey(KEY.D, function () {
    Random_nummer = randint(0, 4)
    Oost_nummer = game.createSprite(4, Random_nummer)
    basic.pause(400)
    Oost_nummer.change(LedSpriteProperty.X, -1)
    while (Oost_nummer.get(LedSpriteProperty.X) > 0) {
        basic.pause(400)
        Oost_nummer.change(LedSpriteProperty.X, -1)
    }
    basic.pause(400)
    Oost_nummer.delete()
})
WSJoyStick.onKey(KEY.C, function () {
    Random_nummer = randint(0, 4)
    Zuid_nummer = game.createSprite(Random_nummer, 4)
    basic.pause(400)
    Zuid_nummer.change(LedSpriteProperty.Y, -1)
    while (Zuid_nummer.get(LedSpriteProperty.Y) > 0) {
        basic.pause(400)
        Zuid_nummer.change(LedSpriteProperty.Y, -1)
    }
    basic.pause(400)
    Zuid_nummer.delete()
})
let Zuid_nummer: game.LedSprite = null
let Oost_nummer: game.LedSprite = null
let Noord_nummer: game.LedSprite = null
let West_nummer: game.LedSprite = null
let Random_nummer = 0
WSJoyStick.JoyStickInit()
let sprite = game.createSprite(2, 2)
let _300 = 300
basic.forever(function () {
    if (WSJoyStick.Listen_Dir(DIR.U)) {
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(_300)
    } else if (WSJoyStick.Listen_Dir(DIR.D)) {
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(_300)
    } else if (WSJoyStick.Listen_Dir(DIR.L)) {
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(_300)
    } else if (WSJoyStick.Listen_Dir(DIR.R)) {
        sprite.change(LedSpriteProperty.X, 1)
        basic.pause(_300)
    } else if (WSJoyStick.Listen_Dir(DIR.U_L)) {
        sprite.change(LedSpriteProperty.Y, -1)
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(_300)
    } else if (WSJoyStick.Listen_Dir(DIR.U_R)) {
        sprite.change(LedSpriteProperty.Y, -1)
        sprite.change(LedSpriteProperty.X, 1)
        basic.pause(_300)
    } else if (WSJoyStick.Listen_Dir(DIR.D_L)) {
        sprite.change(LedSpriteProperty.Y, 1)
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(_300)
    } else if (WSJoyStick.Listen_Dir(DIR.D_R)) {
        sprite.change(LedSpriteProperty.Y, 1)
        sprite.change(LedSpriteProperty.X, 1)
        basic.pause(_300)
    }
})
