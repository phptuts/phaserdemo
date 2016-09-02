demo.state2 = function() {};
demo.state2.prototype = {
    proload: function() {},
    create: function() {
        game.stage.backgroundColor = '#b30000';
        console.log('state2');
        addChangeStateEventListeners();

    },
    update: function() {}
}