demo.state9 = function() {};
demo.state9.prototype = {
    proload: function() {},
    create: function() {
        game.stage.backgroundColor = '#e6e6ff';
        console.log('state9');
        addChangeStateEventListeners();
    },
    update: function() {}
}