window.onload = function() {
    Crafty.init(400, 320, document.getElementById('game'));

    //Titelscene
    Crafty.scene("TitleScene", function () {
        //Maak achtergrond zwart
        Crafty.background("#000");
        Crafty.sprite("banner.png", {introbanner: [0, 0, 320, 31]});
        var banner = Crafty.e("2D, DOM,introbanner");
        banner.x = 30;
        banner.y = 200;

        //Stap 04

        banner.bind('KeyDown', function (e) {
            if (e.key == Crafty.keys.RIGHT_ARROW) {
                Crafty.enterScene("GameScene");
            }
        })
    });

    //Gamescene
    Crafty.scene("GameScene", function () {
        Crafty.background("#F0F");
        //Gravity X, Gravity Y, Pixel to Meter, speed up enabled
        Crafty.box2D.init(0, 10, 32, true);
    });
    var wall1 = crafty.e("2D, Canvas,  Box2D, Color");
    wall1.color("green").attr({x: 13, y: 100, w: 220, h: 12});
    wall1.box2d({bodyType: 'static'});//Must be after positioning
    var wall2 = crafty.e("2D, Canvas,Box2D, color");
    wall2.color("green").attr({x: 140, y: 200, w: 220, h: 12});
    wall2.box2d({bodyType: 'static'});
});

    //Over naar stap 6!!

    Crafty.enterScene("TitleScene");
};