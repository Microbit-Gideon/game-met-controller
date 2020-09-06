WSJoyStick.onKey(KEY.F, function () {
    Random_nummer = randint(0, 4)
    West_nummer = 0
    for (let index = 0; index < 5; index++) {
        if (Random_nummer != West_nummer) {
            Muur_west = game.createSprite(0, West_nummer)
        }
        West_nummer += 1
    }
})
WSJoyStick.onKey(KEY.P, function () {
    Muur = game.createSprite(0, 0)
    Muur = game.createSprite(1, 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
    }
})
WSJoyStick.onKey(KEY.E, function () {
    Random_nummer = randint(0, 4)
    Noord_nummer = 0
    for (let index = 0; index < 5; index++) {
        if (Random_nummer != Noord_nummer) {
            Muur_noord = game.createSprite(Noord_nummer, 0)
        }
        Noord_nummer += 1
    }
    for (let index = 0; index < 4; index++) {
        basic.pause(450)
        Noord_nummer.change(LedSpriteProperty.Y, 1)
    }
})
WSJoyStick.onKey(KEY.D, function () {
    Random_nummer = randint(0, 4)
    Oost_nummer = 0
    for (let index = 0; index < 5; index++) {
        if (Random_nummer != Oost_nummer) {
            Muur_oost = game.createSprite(4, Oost_nummer)
        }
        Oost_nummer += 1
    }
})
WSJoyStick.onKey(KEY.C, function () {
    Random_nummer = randint(0, 4)
    Zuid_nummer = 0
    for (let index = 0; index < 5; index++) {
        if (Random_nummer != Zuid_nummer) {
            Muur_zuid = game.createSprite(Zuid_nummer, 4)
        }
        Zuid_nummer += 1
    }
})
let Muur_zuid: game.LedSprite = null
let Zuid_nummer = 0
let Muur_oost: game.LedSprite = null
let Oost_nummer = 0
let Muur_noord: game.LedSprite = null
let Noord_nummer = 0
let Muur: game.LedSprite = null
let Muur_west: game.LedSprite = null
let West_nummer = 0
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
