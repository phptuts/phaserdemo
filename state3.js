demo.state3 = function() {};
demo.state3.prototype = {
    proload: function() {},
    create: function() {
        game.stage.backgroundColor = '#3333ff';
        console.log('state3');
        addChangeStateEventListeners();
    },
    update: function() {}
}