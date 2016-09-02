demo.state8 = function() {};
demo.state8.prototype = {
    proload: function() {},
    create: function() {
        game.stage.backgroundColor = '#ff1ac6';
        console.log('state8');
        addChangeStateEventListeners();
    },
    update: function() {}
}