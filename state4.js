demo.state4 = function() {};
demo.state4.prototype = {
    proload: function() {},
    create: function() {
        game.stage.backgroundColor = '#d98c8c';
        console.log('state4');
        addChangeStateEventListeners();
    },
    update: function() {}
}