demo.state6 = function() {};
demo.state6.prototype = {
    proload: function() {},
    create: function() {
        game.stage.backgroundColor = '#80ff80';
        console.log('state6');
        addChangeStateEventListeners();
    },
    update: function() {}
}