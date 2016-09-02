demo.state5 = function() {};
demo.state5.prototype = {
    proload: function() {},
    create: function() {
        game.stage.backgroundColor = '#e68a00';
        console.log('state5');
        addChangeStateEventListeners();
    },
    update: function() {}
}