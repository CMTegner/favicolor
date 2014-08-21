var test = require('tape');
var favicon = require('../');

function ic() {
    var icon = document.createElement('link');
    icon.rel = 'icon';
    return icon;
}

test('should return true on success', function(t) {
    t.equals(favicon(ic(), 'red'), true);
    t.end();
});

test('should return accept a string', function(t) {
    var icon = ic();
    t.equals(favicon(icon, 'red'), true);
    t.equals(icon.href, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAABBJREFUCB0BBQD6/wD/AAD/BQAB/yStDWMAAAAASUVORK5CYII=');
    t.end();
});

test('should return accept an array', function(t) {
    var icon = ic();
    t.equals(favicon(icon, [0, 255, 0]), true);
    t.equals(icon.href, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAABBJREFUCB0BBQD6/wAA/wD/BAEB/ymuTOcAAAAASUVORK5CYII=');
    t.end();
});

test('should return accept separate RGB numbers', function(t) {
    var icon = ic();
    t.equals(favicon(icon, 0, 0, 255), true);
    t.equals(icon.href, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAABBJREFUCB0BBQD6/wAAAP//AwIB/8DNK/sAAAAASUVORK5CYII=');
    t.end();
});
