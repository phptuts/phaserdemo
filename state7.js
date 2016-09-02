demo.state7 = function() {};
demo.state7.prototype = {
    proload: function() {},
    create: function() {
        game.stage.backgroundColor = '#9fdf9f';
        console.log('state7');
        addChangeStateEventListeners();
    },
    update: function() {}
}