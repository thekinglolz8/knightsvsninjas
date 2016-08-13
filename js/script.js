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

        banner.bind('KeyDown', function (e){
            if (e.key == Crafty.keys.RIGHT_ARROW) {
                Crafty.enterScene("GameScene");
            }
        })
    });

    //Gamescene
    Crafty.scene("GameScene", function() {
        Crafty.background("#F0F");
        //Gravity X, Gravity Y, Pixel to Meter, speed up enabled
        Crafty.box2D.init(0, 10, 32, true);
    } );

    //Over naar stap 6!!

    Crafty.enterScene("TitleScene");
};