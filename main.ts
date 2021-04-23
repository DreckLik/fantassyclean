let waterDone = true
let earthDone = false

function mainArea (p1: number) {
    let char2 = p1
    let mc = null

    tiles.setTilemap(tilemap`level1`)
    if (p1 == 1) {
        mc = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, 0)
    } else if (p1 == 2) {
        mc = sprites.create(img`
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 4 5 5 5 5 4 e f . . . 
            . . f b 3 e 4 4 4 4 e 3 b f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 e b 3 e e 3 b e 3 3 f . 
            . f 3 3 f f e e e e f f 3 3 f . 
            . f b b f b f e e f b f b b f . 
            . f b b e 1 f 4 4 f 1 e b b f . 
            f f b b f 4 4 4 4 4 4 f b b f f 
            f b b f f f e e e e f f f b b f 
            . f e e f b d d d d b f e e f . 
            . . e 4 c d d d d d d c 4 e . . 
            . . e f b d b d b d b b f e . . 
            . . . f f 1 d 1 d 1 d f f . . . 
            . . . . . f f b b f f . . . . . 
            `, 0)
    }
    scene.cameraFollowSprite(mc)
    mc.setPosition(128, 176)
    controller.moveSprite(mc)
    mc.setKind(SpriteKind.Player)
    
    scene.onOverlapTile(SpriteKind.Player,assets.tile`myTile2`, function(sprite: Sprite, location: tiles.Location) {
        mc = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `)
        mc.destroy()
        insideCastle(char2)
    })

    scene.onOverlapTile(SpriteKind.Player,assets.image`myTile3`, function(sprite: Sprite, location: tiles.Location) {
        waterTemple(char2)
    })

    scene.onOverlapTile(SpriteKind.Player, img`
        c b b b b b b b b b b b b b b c
        c b b b b b b b b b b b b b b c
        c d d d d d d d d d d d d d d c
        c d d d d d d d d d d d d d d c
        c c c c c c c c c c c c c c c c
        c b b b f f f f f f f f b b b c
        c d d b f f f f f f f f b d d c
        c d d b f f f f f f f f b d d c
        c d d b f f f f f f f f b d d c
        c d d b f f f f f f f f b d d c
        c b b c f f f f f f f f c b b c
        c d d b f f f f f f f f b d d c
        c d d b f f f f f c c f b d d c
        c d d b f c c c f f f f b d d c
        c d d b c c c f f c c c b d d c
        a c c a c c c c c c c c a c c a
    `, function(sprite: Sprite, location: tiles.Location) {
        mc = null
        earthTemple(char2)
    })

}


function insideCastle (p1: number) {
    if(waterDone != true || earthDone != true) {
        tiles.setTilemap(tilemap`level2`)
        
        let player = null

        if (p1 == 1) {
            player = sprites.create(img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `, 0)
            player.setPosition(128, 0)
        } else if (p1 == 2) {
            player = sprites.create(img`
                . . . . . f f 4 4 f f . . . . . 
                . . . . f 5 4 5 5 4 5 f . . . . 
                . . . f e 4 5 5 5 5 4 e f . . . 
                . . f b 3 e 4 4 4 4 e 3 b f . . 
                . . f 3 3 3 3 3 3 3 3 3 3 f . . 
                . f 3 3 e b 3 e e 3 b e 3 3 f . 
                . f 3 3 f f e e e e f f 3 3 f . 
                . f b b f b f e e f b f b b f . 
                . f b b e 1 f 4 4 f 1 e b b f . 
                f f b b f 4 4 4 4 4 4 f b b f f 
                f b b f f f e e e e f f f b b f 
                . f e e f b d d d d b f e e f . 
                . . e 4 c d d d d d d c 4 e . . 
                . . e f b d b d b d b b f e . . 
                . . . f f 1 d 1 d 1 d f f . . . 
                . . . . . f f b b f f . . . . . 
                `, 0)
            player.setPosition(128, 0)
        }
        scene.onOverlapTile(SpriteKind.Player,assets.image`exit`, function(sprite: Sprite, location: tiles.Location) {
            player = null 
            mainArea(p1)
        })
    } else if (waterDone == true && earthDone == true) {
        scene.setBackgroundColor(0)
        game.splash("So")
        game.splash("You've completed my tasks.")
        game.splash("My final challenge is a simple 50/50 chance.")
        game.splash("You will either die because I said so.")
        game.splash("Or win and rule the land.")
        game.splash("here goes!")
        let rand = randint(1, 2)
        if(rand == 1) {
            game.splash("Well...")
            game.splash("This is just bad luck.")
            game.over()
        } else if(rand == 2) {
            game.splash("You've won!")

        }
    }
}


function titleScreen () {
    scene.setBackgroundImage(img`
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbccccccffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbccccccffffffffffffffffffffffffffffffffffffffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbccccccffffffffffffffffffffffffffffffffffffffcccccbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbccccccffffffffffffffffffffffffffffffffffffffccccccccccccccccccfffffccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbcccccccffffffffffffffffffffffffffffffffffffffccccccccccccccccccfffffccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbcccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccfffffccccccccccbfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbb
        bbbbbbbbbbbbbbbccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccfffffcccccccccccfffffbbbbbbbbbfffffffffffffbbbbbbbcccccccccccccccccccbbbbbbbbbbbb
        bbbbbbbbbbbccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccfffffcccccccccccfffffbbbbbbbfffffffffffffffffbbbccccccccccccccccccccccbbbbbbbbbbb
        bbbbbbbbbbbccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccfffffcccccccccccfffffbbbbbbfffffffffffffffffffccccccccccccccccccccccccbbbbbbbbbbb
        bbbbbbbbbbcccccccccccccccccccccccccccccfffffccccccccccccccccccfffffccccccccccccfffffcccccccccccfffffbbbbbffffffffffffffffffffcccccccccccccccccccccccccccbbbbbbbb
        bbbbbbcccccccccccccccccccccccccccccccccfffffccccccccccccccccccfffffccccccccccccfffffcccccccccccfffffcccccffffffffffffffffffffccccccccccccccccccccccccccccbbbbbbb
        bbbbbbcccccccccccccccccccccccccccccccccfffffccccccccccccccccccfffffccccccccccccfffffcccccccccccfffffccccffffffffffbcccffffffffccccccccccccccccccccccccccccbbbbbb
        cccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccccfffffccccccccccccfffffcccccccccccfffffccccffffffffbbbccccfffffffccccccccccccccccccccccccccccbbbbbb
        cccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccccfffffccccccfffffffffffffffffcccccfffffccccfffffffcccccccccffffffcccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccfffffffffffffffffcccccfffffccccffffffccccccccccffffffcccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccfffffffffffffffffcccccfffffcccfffffffccccccccccffffffcccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccfffffffffffffffffcccccfffffcccffffffcffffffffffffffffcccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccccfffffccccccfffffffffffffffffcccccfffffcccfffffffffffffffffffffffcccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccccfffffccccccccccccfffffcccccccccccfffffcccfffffffffffffffffffffffcccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccccfffffccccccccccccfffffcccccccccccfffffcccfffffffffffffffffffffffcccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccccfffffccccccccccccfffffcccccccccccfffffcccfffffffffffffffffffffffcccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccccfffffccccccccccccfffffcccccccccccfffffcccffffffffffffccccccfffffcccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccccfffffccccccccccccfffffcccccccccccfffffcccffffffccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccccfffffccccccccccccfffffcccccccccccfffffcccffffffccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccccfffffccccccccccccfffffcccccccccccfffffcccffffffccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccccfffffccccccccccccfffffcccccccccccfffffcccfffffffcccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccccfffffccccccccccccfffffcccccccccccfffffccccffffffcccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccccfffffccccccccccccfffffcccccccccccfffffccccfffffffccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccccfffffccccccccccccfffffcccccccccccfffffccccffffffffccccccccccfffffccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccccfffffccccccccccccfffffcccccccccccfffffcccccffffffffccccccccffffffccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccccfffffccccccccccccfffffcccccccccccfffffcccccffffffffffcccfffffffffccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccccfffffccccccccccccfffffcccccccccccfffffcccccffffffffffffffffffffffccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccccfffffccccccccccccfffffcccccccccccfffffccccccfffffffffffffffffffffccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccccfffffccccccccccccfffffcccccccccccfffffcccccccffffffffffffffffffffccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccccfffffccccccccccccfffffcccccccccccfffffccccccccffffffffffffffffffcccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccccfffffccccccccccccfffffcccccccccccfffffccccccccccfffffffffffffccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88cccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc868ccccccccccccccccccccccccccccc
        cccccccccccccccc88cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88ccccccccccccccccccccccccccccccccc868cccccccccccccccccccccccccccc
        cccccccccccccccc868ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc868ccccccccccccccccccccccccccccccccc868ccccccccccccccccccccccccccc
        ccccccccccccccccc868ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc868ccccccccccccccccccccccccccccccccc868cccccccccccccccccccccccccc
        cccccccccccccccccc868ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc868cccccccccccccccccccccccccccccccc868cccccccccccccccccccccccccc
        ccccccccccccccccccc868ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc868cccccccccccccccccccccccccccccccc868ccccccccccccccccccccccccc
        ccccccccccccccccccc868ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc868cccccccccccccccccccccccccccccccc868ccccccccccccccccccccccccc
        cccccccccccccccccccc868cccccccccccccccccccccccccccccccccccccccccccccccc88ccccccccccccccccccccccccc868cccccccccccccc88ccccccccccccccc8668cccccccccccccccccccccccc
        cccccccccccccccccccc868cccccccccccccccccccccccccccccccccccccccccccccccc868cccccccccccccccccccccccc868cccccccccccccc868cccccccccccccc8668cccccccccccccccccccccccc
        cccccccccccccccccccc8668cccccccccccccccccccccccccccccccccccccccccccccccc868ccccccccccccccccccccccc8668cccccccccccccc868ccccccccccccc8668cccccccccccccccccccccccc
        cccccccccccccccccccc8668ccccccccccccccccccccccccccccccccccccccccccccccccc868cccccccccccccccccccccc8668ccccccccccccccc868cccccccccccc8768cccccccccccccccccccccccc
        cccccccccccccccccccc8668cccccccccccccccccccccccccccccccccccccccccccccccccc868ccccccccccccccccccccc8668cccccccccccccccc868cccc88ccccc8768cccccccccccccccccccccccc
        cccccccccccccccccccc8768cccccccccccccccccccccccccccccccccccccccccccccccccc868ccccccccccccccccccccc8768cccccccccccccccc868cccc868ccc86768cccccccccccccccccccccccc
        cccccccccccccccccccc8768ccccccccccccccccccccccccccccccccccccccccccccccccccc868cccccccccccccccccccc8768ccccccccccccccccc868cccc868cc87768cccccccccccccccccccccccc
        ccccccccccccccccccc86768ccccccccccccccccccccccccccccccccccccccccccccccccccc868ccccccccccccccccccc86768ccccccccccccccccc868ccccc868c6778ccccccccccccccccccccccccc
        ccccccccccccccccccc87768ccccccccccccccccccccccccccccccccccccccccccccccccccc8668cccccccccccccccccc87768ccccccccccccccccc8668ccccc8687676cccccccccc888cccccccccccc
        ccccccccccccccccccc6778cccccccccccccccccccccccccccccccccccccccccccccccccccc8668cccccccccccccccccc6778cccccccccccccccccc8668ccccc8687676cccccccc88668cccccccccccc
        cccccccccccccccccc67676cccccccccc888ccccccccccccccccccccccccccccccccccccccc8668ccccccccccccccccc67676cccccccc888ccccccc8668cccccc86856cccccccc86688ccccccccccccc
        cccccccccccccccccc67676cccccccc88668ccccccccccccccccccccccccccccccccccccccc8768ccccccccccccccccc67676cccccc88668ccccccc8768ccccc686856ccccccc8768ccccccccccccccc
        ccccccccc888ccccc65656cccccccc86688cccccccccccccccccccccccccccccccccccccccc8768cccccccccccccccc65656cccccc86688cccccccc8768ccccc68668ccccccc8778cccccccccccccccc
        ccccccc88668cccc655656ccccccc8768ccccccccccccccccccccccccccccccccccccccccc86768ccccccccccccccc655656ccccc8768ccccccccc86768cccc878668ccccccc8778cccccccccccccccc
        cccccc86688ccccc65656ccccccc8778cccccccccccccccccccccccccccccccccccccccccc87768ccccccccccccccc65656ccccc8778cccccccccc87768ccc8768668cc8ccc8778ccccccccccccccccc
        ccccc8768ccccccc76756ccccccc8778cccccccccccccccccccccccccccccccccccccccccc6778ccccccccccccccc876756ccccc8778cccccccccc6778cccc6768768cc8ccc8578ccccccccccccccccc
        cccc8778cccccccc6776ccc8ccc8778cccccccccccccccccccccccccccccccccccccccccc67676cccccccccc888c876776ccc8c8778cccccccccc67676ccc87668768888ccc8558ccccccccccccccccc
        cccc8778cccccccc678cccc8ccc8578cccccccccccccccccccccccccccccccccccccccccc67676cccccccc88668c67678cccc8c8578cccccccccc67676ccc67886768686ccc8758cccccc88ccccccccc
        cccc778ccccccccc668ccc88ccc8558ccccccccccccccccccccccccccccccccccccccccc65656cccccccc86688c876668ccc88c8558ccccccccc65656cccc86887768876ccc87678cccc878ccccccccc
        cccc578ccccccccc68cccc86ccc8758cccccc88cccccccccccccccccccccccccccccccc655656ccccccc8768ccc67868cccc86c8758cccccc88655656ccc868667788768ccc87678ccc878cccccccccc
        cccc558ccccccccc68ccc876ccc87678cccc878cccccccccccccccccccccccccccccccc65656ccccccc8778cccc86868ccc876c87678cccc87865656cccc868676767678cccc87888c8768cccccccccc
        cccc758cccccc88c68cc8768ccc87678ccc878cccccccccccccccccccccccc888ccccc876756ccccccc8778ccc868668cc8768c87678ccc878876756cccc86867676766ccccc886688678ccccccccccc
        cccc7678cccc878c8cc87678cccc87678c8768cccccccccccccccccccccc88668cccc876776ccc8ccc8778cccc86868cc87678cc87678c876876776ccc8c86656567678cccc8668868778ccccc88668c
        cccc7678ccc878cc8cc8766ccccc876768678cccccccccccccccccccccc86688ccccc67678cccc8ccc8578cccc86868cc8766ccc87676867867678cccc8c8655656766cccc87688668766cccc86688cc
        cccc87678c8768cc8c87678cccccc87668778ccccccccccccccccccccc8768cccccc876668ccc88ccc8558cccc86868c87678cccc8766877876668ccc88c8656567678ccc8778cc868767ccc8768cccc
        ccc8766868678ccc8c8766cccccccc8668766cccccccccccccccccccc8778ccccccc67868cccc86ccc8758cccc86888c8766cccccc86687667868cccc86c876756768c8888778ccc86676cc8778ccccc
        cccc866868778ccc887678ccccccccc8687678ccccccccccccccccccc8778ccccccc86868ccc876ccc87678ccc8878887678ccccccc8687686868ccc8768767768668c678778cccc86857cc8778ccccc
        ccccc86868766ccc68768c88cccccccc8667678ccccccccccccccccc8778ccccccc868668cc8768ccc87678ccc878768768c88cccccc866868668cc87686767876668c86857888cc86665cc778cccccc
        cccccc86687678cc78668c678ccccccc8685756ccccccccccccccccc8578ccccccc86868cc87678cccc87678c8768778668c678ccccc86886868cc876787666877888876855868cc86685cc578cccccc
        cccccc868667678c76668cc678cc88cc86665756cccccccccccccccc8558ccccccc86868cc8766ccccc8767686786676668cc67888cc86686868cc876667868667786688875868cc86887cc558cccccc
        cc88cc868685756c778668cc678868cc86685656cccccccccccccccc8758cccccc886868c87678cccccc8766877876778668cc6868cc86686868c876788686876687688887678cc868787cc758cccccc
        8868cc86866657566778668c678668cc86687678cccc88cccccccccc87678cccc8786878c8766ccccccc88668766766778668c8668cc86686878c876686866876876888887678c8687855868cc8668c8
        8668cc86866856566676888858668cc868687678cccc868cccccccc867678ccc8788787887678ccccccc8686876787667688886688c868687878876788686886876788888876788876875868cc868887
        668cc86886687678667768885868cc8688667678ccccc868cccccc87687678c8768876768768c88cccccc868667678667768886856868868767687687868687887667787887676867877678cc8687876
        68cc868868687678766778888768c88886876888cccccc868cccc87788767686787876778668cc78cccccc88685756766778876858888688767786687868687876786776878766877877678c86878678
        68c8888688667678776677878768c88888776868cccccc866cccc87787876687787876676668cc678cc88c88666575676677876878888878766766687868787876676676876866876688767888768778
        68c88888868768888776677687668888867677868ccccc8676cc8778777866876677676778668cc678868c88668565677667876688888676676778668878788767877677687686876788767686787766
        668888868877686878776676876768886687787868ccc67656cc857877778687678687667786688678668678668767887766876768886687876677866876768768788667687768667677876687787667
        676888668676778677877677687677686866877866cc656758cc855877777866767687766768888586686586868767878776787677686866877667688876778668867867688778685757686687668776
        767768686687787877787667687766778868777867665775868c875877777868575878766776888586865868866767877876687766778868787667768876676668686788888868666578768687678657
        776677886866877877778767688776676887776788665656868c876788877866657878676677888876868888687688877787678776676887786766778867677866886678868778668568776866767865
        8776676888687778777787688778676778877656868876788687876786877866856876877667787876888888877686877787688867677887778776677887667786688678668778668768877868575685
        `)
    controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function() {
        selectScreen()
    })
}


function waterTemple (p1: number) {
	tiles.setTilemap(tilemap`level4`)

    let villian = sprites.create(img`
        ................................
        ...ffffffffffffffffffffffffff...
        .fff7fddddddddddddddddddddf7fff.
        f777ffddfddddddddddddddfddff777f
        f777fddfffddddddddddddfffddf777f
        f777fddf1fddddddddddddf1fddf777f
        f777fddf1fddddddddddddf1fddf777f
        f777fddfefddddddddddddfefddf777f
        f777fddfffdddddfddddddfffddf777f
        f777fdddfddddddfdddddddfdddf777f
        f777fdddddddddfddddddddddddf777f
        f777fdddddddddfddddddddddddf777f
        f777fddddddddddddddddddddddf777f
        f777fddddddddddffddddddddddf777f
        f777fdddddddff22ffdddddddddf777f
        .fff7fdddddddf2fddddddddddf7fff.
        ...ffffffffffffffffffffffffff...
        .........ff6677766777ff.........
        ......ffff667776677fff..........
        ....fff7766777667fff............
        ...ff77666777667ff..............
        ..ff77667777667ff...............
        ..f777677777677ff...............
        .ff7767777766777fff.............
        .ff776677776677777fffff.........
        ..f7776777776777777777ffffff....
        ..f777667777766777777777777fff..
        ..f77776667777666667777777777ff.
        ..ff77777666667777666666667777ff
        ...ff77777777666666777777667777f
        ....ffffff777777776666777767777f
        .........fffffffffffffffffffffff
    `)
    tiles.placeOnTile(villian, tiles.getTileLocation(8, 4))

    let player = null
    
    if (p1 == 1) {
        player = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, 0)
    } else if (p1 == 2) {
        player = sprites.create(img`
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 4 5 5 5 5 4 e f . . . 
            . . f b 3 e 4 4 4 4 e 3 b f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 e b 3 e e 3 b e 3 3 f . 
            . f 3 3 f f e e e e f f 3 3 f . 
            . f b b f b f e e f b f b b f . 
            . f b b e 1 f 4 4 f 1 e b b f . 
            f f b b f 4 4 4 4 4 4 f b b f f 
            f b b f f f e e e e f f f b b f 
            . f e e f b d d d d b f e e f . 
            . . e 4 c d d d d d d c 4 e . . 
            . . e f b d b d b d b b f e . . 
            . . . f f 1 d 1 d 1 d f f . . . 
            . . . . . f f b b f f . . . . . 
            `, 0)
    }
    scene.cameraFollowSprite(player)
    tiles.placeOnTile(player, tiles.getTileLocation(8, 6))

    game.splash("I am DANGER SNAKE.")
    game.splash("I will give you my orb for one simple question!")
    game.splash("What is the air-speed of a swallow?")
    game.splash("A. .04? IDRK")
    game.splash("B. African or European")


    controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
        game.over()
    })
    controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function() {
        game.splash("YOU HAVE DEFEATED ME!")
        game.splash("TAKE THE ORB!!!")
        waterDone = true
        mainArea(p1)
    })

}


function earthTemple (p1: number) {
    tiles.setTilemap(tilemap`level3`)
    game.splash("Beat my maze of horror!" + "If you DARE!")
    let mc = null

    if (p1 == 1) {
        mc = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, 0)
    } else if (p1 == 2) {
        mc = sprites.create(img`
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 4 5 5 5 5 4 e f . . . 
            . . f b 3 e 4 4 4 4 e 3 b f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 e b 3 e e 3 b e 3 3 f . 
            . f 3 3 f f e e e e f f 3 3 f . 
            . f b b f b f e e f b f b b f . 
            . f b b e 1 f 4 4 f 1 e b b f . 
            f f b b f 4 4 4 4 4 4 f b b f f 
            f b b f f f e e e e f f f b b f 
            . f e e f b d d d d b f e e f . 
            . . e 4 c d d d d d d c 4 e . . 
            . . e f b d b d b d b b f e . . 
            . . . f f 1 d 1 d 1 d f f . . . 
            . . . . . f f b b f f . . . . . 
            `, 0)
    }
    let character = mc
    

    scene.cameraFollowSprite(character)
    controller.moveSprite(character)
    tiles.placeOnTile(character, tiles.getTileLocation(24, 48))


    scene.onOverlapTile(SpriteKind.Player, img`
        a c c a c c c c c c c c a c c a
        c d d b c c c f f c c c b d d c
        c d d b f f f f c c c f b d d c
        c d d b f c c f f f f f b d d c
        c d d b f f f f f f f f b d d c
        c b b c f f f f f f f f c b b c
        c d d b f f f f f f f f b d d c
        c d d b f f f f f f f f b d d c
        c d d b f f f f f f f f b d d c
        c d d b f f f f f f f f b d d c
        c b b b f f f f f f f f b b b c
        c c c c c c c c c c c c c c c c
        c d d d d d d d d d d d d d d c
        c d d d d d d d d d d d d d d c
        c b b b b b b b b b b b b b b c
        c b b b b b b b b b b b b b b c
    `, function(sprite: Sprite, location: tiles.Location) {
        game.splash("There's no escape!")
    })


    scene.onOverlapTile(SpriteKind.Player,assets.image`myTile4`, function(sprite: Sprite, location: tiles.Location) {
        game.splash("NOOOO!")
        game.splash("MY IMPENITRABLE MAZE!!")
        earthDone = true
        mainArea(p1)
    })

}


function selectScreen () {
    let character = 1
    let selector = sprites.create(img`
        .6666........6666.
        .6196........6196.
        .696..........696.
        .66............66.
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        .66............66.
        .616..........616.
        .6996........6996.
        .6666........6666.
        `, 0)
    selector.setPosition(36, 84)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffff22222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffff222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffff22222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222ffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffff2222222222222222222ffffffffffffffffffffffff22222fffffffffffffffffffffffffffffffffffffffffffffffffff22222ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff22222222222222222222ffffffffffffffffffffffff22222ffffffffffffffffffffffffffffffffffffffffffffffffff222222ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff222222222fff22222222ffffffffffffffffffffffff22222ffffffffffffffffffffffffffffffffffffffffffffffffff222222ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff22222222fffff2222222ffffffffffffffffffffffff22222ffffffffffffffffffffffffffffffffffffffffffffffffff222222ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff222222ffffffff222222ffffffffffffffffffffffff22222ffffffffffffffffffffffffffffffffffffffffffffffffff222222ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff222222fffffffff22222ffffffffffffffffffffffff22222ffffffffffffffffffffffffffffffffffffffffffffffffff22222fffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff22222ffffffffff22222ffffffffffffffffffffffff22222ffffffffffffffffffffffffffffffffffffffffffffffffff22222fffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff22222ffffffffff22222ffffffffffffffffffffffff22222ffffffffffffffffffffffffffffffffffffffffffffffffff22222fffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff22222fffffffffffffffffffffffffffffffffffffff22222ffffffffffffffffffffffffffffffffffffffffffffffffff22222fffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff22222fffffffffffffffffffffffffffffffffffffff22222fffffffffffffffffffffffffffffffffffffffffff222222222222222222222ffffffffffffffffffffffffffffffffff
        fffffffffffff222222ffffffffffffffffffff2222222222ffffffff22222fffffff22222222fffffffffffffffffff22222ffff222222222222222222222ffffffffffffffffffffffffffffffffff
        fffffffffffff222222ffffffffffffffffff22222222222222ffffff22222ffffff22222222222fffffffffffffff2222222ffff222222222222222222222ffffffffffffffffffffffffffffffffff
        fffffffffffff2222222fffffffffffffffff222222222222222fffff22222fffff2222222222222fffffffffffff22222222ffff222222222222222222222ffffffffffffffffffffffffffffffffff
        fffffffffffff222222222fffffffffffffff222222222222222ffff222222ffff222222222222222ffffffffff2222222222ffff222222222222222222222ffffffffffffffffffffffffffffffffff
        fffffffffffff22222222222ffffffffffff2222222222222222ffff222222fff2222222222222222fffffffff22222222222ffffffffff222222fffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffff222222222222222222ffff2222222ff2222222ffff222222ff22222222222222222ffffffff222222222222ffffffffff222222fffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffff2222222222222222222fff2222222222222222ffff222222ff22222222fff222222ffffffff2222222222fffffffffffff22222fffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffff222222222222222222fff2222222222222222ffff22222ff22222222f222222222fffffff222222222fffffffffffffff22222fffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff2222222222222222fff2222222222222222ffff22222ff222222222222222222fffffff2222222fffffffffffffffff222222ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff22222222222222fff2222222222222222ffff22222ff222222f22222222222fffffff222222ffffffffffffffffff222222ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffff222222fff22222222222222ffffff22222ff222222f22222222222ffffff2222222ffffffffffffffffff222222ffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffff22222fff222222ffffffffffffff22222ff22222ff2222222222fffffff222222fffffffffffffffffff222222ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffff222222fff222222ffffffffffffff22222ff22222ff222222fffffffffff222222ffffffffffffffffffff22222ffffffffffffffffffffffffffffffffffffffffff
        fffffffffff222222ffffffffff222222fff222222fffffff22222ff22222ff22222ffffffffffffff22222222222ffffffffff22222fffff22222ffffffffffffffffffffffffffffffffffffffffff
        fffffffffff2222222ffffffff2222222fff22222222fff2222222ff22222ff22222ffffffffffffff22222222222ffffffffff22222fffff22222ffffffffffffffffffffffffffffffffffffffffff
        fffffffffff222222222fffff22222222ffff22222222222222222ff22222ff222222ffffffffffff222222222222fffffffff222222fffff22222ffffffffffffffffffffffffffffffffffffffffff
        fffffffffff2222222222ff2222222222ffff22222222222222222ff22222ff222222fffffffffff2222222222222fffffffff222222fffff222222fffffffffffffffffffffffffffffffffffffffff
        fffffffffff222222222222222222222fffff22222222222222222ff22222ff2222222fffffffff22222222f222222fffffff2222222fffff222222fffffffffffffffffffffffffffffffffffffffff
        ffffffffffff2222222222222222222fffffff2222222222222222ff22222ff222222222222222222222222f2222222ffffff2222222fffff222222fffffffffffffffffffffffffffffffffffffffff
        fffffffffffff222222222222222222ffffffff2222222222222ffff22222fff2222222222222222222222ff2222222222222222222ffffff222222fffffffffffffffffffffffffffffffffffffffff
        fffffffffffffff222222222222222ffffffffffffffffffffffffff22222fff2222222222222222222222ff2222222222222222222ffffff222222fffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffff22222222222fffffffffffffffffffffffffffff22222ffff2222222222222222222fffff22222222222222222fffffff222222fffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222fffffff2222222222222222fffffff222222fffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222ffffffff22222ffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffff44fffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffff545545fffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffff2222ffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffe455554effffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffeeeeeefffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffb3e4444e3bfffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffe222222eefffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffff3333333333fffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffe2ffffff2efffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffff33eb3ee3be33ffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffeeeeffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffff33ffeeeeff33ffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffefbf44fbfefffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffbbfbfeefbfbbffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffee41fddf14eeffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffbbe1f44f1ebbffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffeeddddddeefffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffbbf444444fbbffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffee4444eeffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffbbfffeeeefffbbfffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffe4f222222f4effffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffeefbddddbfeeffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff4df222222fd4ffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffe4cddddddc4effffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff44f445544f44ffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffefbdbdbdbbfeffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffff1d1d1dfffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffbbfffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    animation.runImageAnimation(
    selector,
    [img`
        .6666........6666.
        .6196........6196.
        .696..........696.
        .66............66.
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        .66............66.
        .616..........616.
        .6996........6996.
        .6666........6666.
        `,img`
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        `,img`
        .6666........6666.
        .6196........6196.
        .696..........696.
        .66............66.
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        .66............66.
        .616..........616.
        .6996........6996.
        .6666........6666.
        `],
    500,
    true
    )

    controller.right.onEvent(ControllerButtonEvent.Pressed, function() {
        character = 2
        selector.setPosition(128, 83)
    })

    controller.left.onEvent(ControllerButtonEvent.Pressed, function() {
        character = 1
        selector.setPosition(36, 83)
    })

    controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
        selector.destroy()
        mainArea(character)
    })

}


function gameEnd() {
    scene.setBackgroundImage(img`
        fffffffffffffffffffffffff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffff55555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffff55555ffffffffffffff55555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffff55555ffffffffffffff55555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffff55555ffffffffffffff55555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffff55555fffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffff555555ffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffff555555ffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffff555555ffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffff5555555fffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555ffffffffffffff5555555ffffffffffffffffffffffffffffffffffffff
        fffffff5555555fffffffffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555fffffffffffff555555555fffffffffffffffffffffffffffffffffffff
        fffffff5555555fffffffffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555ffffffffffff555555555555fffffffffffff555555555fffffffffffff
        fffffff55555555ffffffffffff555555ffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffff555555fffffffffff555555555555555fffffffff55555555555fffffffffffff
        ffffffff55555555ffffffffff5555555fffffff555555555ffffffffffffffffffffffffffff55555ffffffffffffff55555fffffff55555555555555555555ffffff5555555555555fffffffffffff
        fffffffff5555555fffffffff5555555ffffff5555555555555fffffffffffffffffffffffff555555ffffffffffffffffffffffffff55555555555555555555ffffff5555555555555fffffffffffff
        fffffffff55555555fffffff55555555fffff5555555555555555fffffff55555fffffffffff5555555fffffffffffffffffffffffff55555555555555555555ffffff5555555555555fffffffffffff
        ffffffffff55555555fffff555555555ffff555555555555555555ffffff55555fffffffffff5555555fffffffffffffffffffffffff555555555ffff5555555fffff55555555555555fffffffffffff
        fffffffffff55555555ffff55555555fffff5555555555555555555fffff55555fffffffffff55555555ffffffffffffffffffffffff55555555fffffff55555ffff555555555555555fffffffffffff
        fffffffffff55555555fff55555555fffff555555555f5555555555fffff55555fffffffffff55555555ffffffffffffffffffffffff55555555fffffffffffffff5555555555555555fffffffffffff
        ffffffffffff55555555f55555555ffffff5555555fffff55555555fffff55555ffffffffff5555555555fffffffffffffffffffffff55555555fffffffffffffff5555555555555555fffffffffffff
        fffffffffffff555555555555555ffffff5555555ffffffff5555555fff555555ffffffffff5555555555fffffffffffffffffffffff5555555fffffffffffffff5555555555555555ffffffffffffff
        ffffffffffffff55555555555555ffffff5555555fffffffff555555fff555555ffffffffff55555555555ffffffffffffffffffffff5555555fffffffffffffff555555555555555fffffffffffffff
        ffffffffffffff5555555555555fffffff555555ffffffffff555555fff555555ffffffffff555555555555ffffffffffffffffffffff555555fffffffffffffff55555555555555ffffffffffffffff
        fffffffffffffff55555555555ffffffff555555ffffffffff555555fff555555ffffffffff555555555555ffffffffffffffffffffff555555fffffffffffffff555555555555ffffffffffffffffff
        ffffffffffffffff555555555fffffffff55555ffffffffffff55555fff555555fffffffff55555555555555fffffffffffffffffffff555555fffffffffffffff5555555555ffffffffffffffffffff
        ffffffffffffffff55555555ffffffffff55555ffffffffffff55555fff5555555ffffffff555555f55555555ffffffffffffffffffff555555ffffffffffffffff55555ffffffffffffffffffffffff
        fffffffffffffffff5555555ffffffffff55555ffffffffffff55555ffff555555fffffff5555555ff55555555fffffffffffffffffff555555ffffffffffffffff555555fffffffffffffffffffffff
        ffffffffffffffff55555555ffffffffff55555fffffffffff555555ffff5555555ffffff5555555ff555555555ffffffffffffffffff555555ffffffffffffffff555555fffffffff55555fffffffff
        ffffffffffffffff555555ffffffffffff55555ffffffffff5555555ffff555555555fff5555555ffff5555555555ffffffffffffffff555555ffffffffffffffff5555555ffffffff55555fffffffff
        ffffffffffffffff555555ffffffffffff555555ffffffff55555555fffff555555555555555555fffff55555555555ffffffffffffff55555fffffffffffffffff555555555fffff555555fffffffff
        ffffffffffffffff555555ffffffffffff555555fffffff555555555fffff55555555555555555fffffff55555555555fffffffffffff55555ffffffffffffffffff5555555555555555555fffffffff
        ffffffffffffffff55555fffffffffffff555555fffff5555555555fffffff5555555555555555ffffffff5555555555fffffffffffff55555ffffffffffffffffff5555555555555555555fffffffff
        ffffffffffffffff55555fffffffffffff5555555fff5555555555fffffffff55555555555555ffffffffff555555555fffffffffffff55555fffffffffffffffffff555555555555555555fffffffff
        ffffffffffffffff55555ffffffffffffff555555555555555555ffffffffffff55555555555fffffffffffff5555555ffffffffffffffffffffffffffffffffffffff55555555555555555fffffffff
        ffffffffffffffff55555ffffffffffffff55555555555555555ffffffffffffff55555555fffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffff5555555555555fffffffffff
        ffffffffffffffff55555ffffffffffffff5555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffff55555fffffffffffffff5555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffff55555ffffffffffffffff55555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555fffffffff555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555fffffffff55555555ffffffffffffffffffffffffffffffffffffff555555ffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555fffffffff55555555fffffffffffffffffffffffffffffffffffff5555555555fffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555fffffffff55555555ffffffffffffffffffffffffffffffffffff55555555555fffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555fffffffff55555555ffffffffffffffffffffffffffffffffff5555555555555fffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffff55555555fffffffffffffffffffffffffffffffff55555555555555fffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555ffffffffff55555555ffffffffffffffffffffffffffffffff555555555555555fffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555fffffffffff5555555fffffffffffffff55555fffffffffff5555555555f555555ffffffffff
        fffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffff555555fffffffffff555555ffffffffffffffff55555ffffffffff5555555555ff555555ffffffffff
        fffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffff555555fffffffffff555555ffffffffffffffff55555ffffffffff55555555ffff555555ffffffffff
        fffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffff555555ffffffffffffffff55555fffffffff55555555fffff555555ffffffffff
        fffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffff555555fffffff55555555fffffff555555fffffffff
        fffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffff555555ffffffffffffffffffffffffffffffffff555555fffffff5555555ffffffff555555fffffffff
        fffffffffffffffffffffffffffff555555ffffffffffffffffffffffffffffffffffffffffff555555ffffffffffffffffffffffffffffffffff555555ffffff55555555ffffffff555555fffffffff
        fffffffffffffffffffffffffffff555555ffffffffffffffffffffffffffffffffffffffffff555555ffffffffffffffffffffffffffffffffff555555ffffff5555555fffffffff555555fffffffff
        fffffffffffffffffffffffffffff555555fffffffffffffffffffffff55555ffffffffffffff555555fffffffffffffffffffffffffffffffffff555555ffff5555555fffffffffff55555fffffffff
        fffffffffffffffffffffffffffff555555ffffffffffffffffffffff555555ffffffffffffff55555ffffffffffffffffffffffffffffffffffff555555ffff5555555fffffffffff55555fffffffff
        ffffffffffffffffffffffffffffff555555ffffffffffffffffffff5555555fffffffffffff555555ffffffffffffffffffffffffffffffffffff555555fff5555555ffffffffffff55555fffffffff
        ffffffffffffffffffffffffffffff555555ffffffffffffffffffff5555555fffffffffffff555555fffffffffff55555ffffffffffffffffffff555555ff55555555ffffffffffff55555fffffffff
        ffffffffffffffffffffffffffffff555555ffffffffffffffffffff55555555ffffffffffff555555fffffffffff55555fffffffffffffffffffff55555ff5555555fffffffffffff55555fffffffff
        ffffffffffffffffffffffffffffff555555fffffffffffffffffff555555555fffffffffff5555555fffffffffff55555fffffffffffffffffffff55555f55555555fffffffffffff55555fffffffff
        fffffffffffffffffffffffffffffff555555ffffffffffffffffff555555555fffffffffff555555ffffffffffff55555fffffffffffffffffffff55555f5555555ffffffffffffff55555fffffffff
        fffffffffffffffffffffffffffffff555555fffffffffffffffff5555555555fffffffffff555555fffffffffff555555fffffffffffffffffffff555555555555fffffffffffffff55555fffffffff
        fffffffffffffffffffffffffffffff555555fffffffffffffffff5555555555ffffffffff5555555fffffffffff555555fffffffffffffffffffff555555555555fffffffffffffff55555fffffffff
        fffffffffffffffffffffffffffffff5555555ffffffffffffffff5555555555ffffffffff555555ffffffffffff555555fffffffffffffffffffff55555555555ffffffffffffffff555555ffffffff
        ffffffffffffffffffffffffffffffff555555fffffffffffffff55555555555fffffffff5555555fffffffffff5555555fffffffffffffffffffff55555555555ffffffffffffffff555555ffffffff
        ffffffffffffffffffffffffffffffff555555fffffffffffffff555555555555ffffffff5555555fffffffffff555555ffffffffffffffffffffff5555555555fffffffffffffffff555555ffffffff
        ffffffffffffffffffffffffffffffff5555555ffffffffffffff555555555555ffffffff555555ffffffffffff555555ffffffffffffffffffffff5555555555fffffffffffffffff555555ffffffff
        fffffffffffffffffffffffffffffffff555555fffffffffffff5555555555555fffffff5555555ffffffffffff555555ffffffffffffffffffffff555555555fffffffffffffffffff55555ffffffff
        fffffffffffffffffffffffffffffffff555555fffffffffffff555555f555555fffffff555555fffffffffffff55555fffffffffffffffffffffff555555555ffffffffffffffffff555555ffffffff
        fffffffffffffffffffffffffffffffff5555555ffffffffffff555555ff55555fffffff555555fffffffffffff55555fffffffffffffffffffffff555555555ffffffffffffffffff555555ffffffff
        ffffffffffffffffffffffffffffffffff555555fffffffffff5555555ff55555ffffff5555555fffffffffffff55555fffffffffffffffffffffff55555555fffffffffffffffffff555555ffffffff
        ffffffffffffffffffffffffffffffffff555555fffffffffff555555fff55555ffffff555555ffffffffffffff55555fffffffffffffffffffffff55555555fffffffffffffffffff555555ffffffff
        ffffffffffffffffffffffffffffffffff555555fffffffffff555555fff555555ffff5555555ffffffffffffff55555fffffffffffffffffffffff5555555ffffffffffffffffffff55555fffffffff
        fffffffffffffffffffffffffffffffffff55555ffffffffff5555555fff555555ffff5555555ffffffffffffff55555fffffffffffffffffffffff5555555fffffffffffffffffff555555fffffffff
        fffffffffffffffffffffffffffffffffff555555fffffffff555555ffff555555fff5555555fffffffffffffff55555fffffffffffffffffffffff555555fffffffffffffffffff5555555fffffffff
        fffffffffffffffffffffffffffffffffff555555ffffffff5555555ffff5555555ff5555555ffffffffffffff555555ffffffffffffffffffffff5555555fffffffffffffffffff5555555fffffffff
        fffffffffffffffffffffffffffffffffff555555ffffffff5555555fffff555555f5555555fffffffffffffff555555ffffffffffffffffffffff5555555fffffffffffffffffff5555555fffffffff
        fffffffffffffffffffffffffffffffffff555555fffffff5555555ffffff55555555555555fffffffffffffff555555ffffffffffffffffffffff555555ffffffffffffffffffff555555ffffffffff
        ffffffffffffffffffffffffffffffffffff555555fffff55555555ffffff5555555555555ffffffffffffffff555555ffffffffffffffffffffff555555ffffffffffffffffffff555555ffffffffff
        ffffffffffffffffffffffffffffffffffff555555fffff5555555ffffffff555555555555ffffffffffffffff55555fffffffffffffffffffffff555555ffffffffffffffffffff55555fffffffffff
        ffffffffffffffffffffffffffffffffffff555555ffff55555555ffffffff55555555555fffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff5555555fff5555555ffffffffff5555555555fffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff555555ff5555555ffffffffffff55555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff555555f55555555fffffffffffff555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff55555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff5555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff5555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff55555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
}
titleScreen()
