let Zuid_nummer: game.LedSprite = null
let Oost_nummer: game.LedSprite = null
let West_nummer: game.LedSprite = null
let Noord_nummer: game.LedSprite = null
let Random_nummer = 0
let Richting = 0
WSJoyStick.JoyStickInit()
let sprite = game.createSprite(2, 2)
let _300 = 300
game.setScore(0)
let Tijd = 2000
basic.forever(function () {
    if (Richting == 1) {
        Random_nummer = randint(0, 4)
        Noord_nummer = game.createSprite(Random_nummer, 0)
        basic.pause(350)
        Noord_nummer.change(LedSpriteProperty.Y, 1)
        while (Noord_nummer.get(LedSpriteProperty.Y) < 4) {
            basic.pause(350)
            Noord_nummer.change(LedSpriteProperty.Y, 1)
            if (Noord_nummer.isTouching(sprite)) {
                game.gameOver()
            }
        }
        basic.pause(350)
        if (Tijd != 350) {
            Tijd += -50
        }
        Noord_nummer.delete()
        game.addScore(1)
    }
})
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
basic.forever(function () {
    Richting = randint(1, 4)
    basic.pause(Tijd)
})
basic.forever(function () {
    if (Richting == 4) {
        Random_nummer = randint(0, 4)
        West_nummer = game.createSprite(0, Random_nummer)
        basic.pause(350)
        West_nummer.change(LedSpriteProperty.X, 1)
        while (West_nummer.get(LedSpriteProperty.X) < 4) {
            basic.pause(350)
            West_nummer.change(LedSpriteProperty.X, 1)
            if (West_nummer.isTouching(sprite)) {
                game.gameOver()
            }
        }
    }
    basic.pause(350)
    if (Tijd != 350) {
        Tijd += -50
    }
    West_nummer.delete()
    game.addScore(1)
})
basic.forever(function () {
    if (Richting == 2) {
        Random_nummer = randint(0, 4)
        Oost_nummer = game.createSprite(4, Random_nummer)
        basic.pause(350)
        Oost_nummer.change(LedSpriteProperty.X, -1)
        while (Oost_nummer.get(LedSpriteProperty.X) > 0) {
            basic.pause(350)
            Oost_nummer.change(LedSpriteProperty.X, -1)
            if (Oost_nummer.isTouching(sprite)) {
                game.gameOver()
            }
        }
        basic.pause(350)
        if (Tijd != 350) {
            Tijd += -50
        }
        Oost_nummer.delete()
        game.addScore(1)
    }
})
basic.forever(function () {
    if (Richting == 3) {
        Random_nummer = randint(0, 4)
        Zuid_nummer = game.createSprite(Random_nummer, 4)
        basic.pause(350)
        Zuid_nummer.change(LedSpriteProperty.Y, -1)
        while (Zuid_nummer.get(LedSpriteProperty.Y) > 0) {
            basic.pause(350)
            Zuid_nummer.change(LedSpriteProperty.Y, -1)
            if (Zuid_nummer.isTouching(sprite)) {
                game.gameOver()
            }
        }
        basic.pause(350)
        if (Tijd != 350) {
            Tijd += -50
        }
        Zuid_nummer.delete()
        game.addScore(1)
    }
})
