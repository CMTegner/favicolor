var size = 1;
var canvas = document.createElement('canvas');
if (typeof canvas.getContext === 'function') {
    var ctx = canvas.getContext('2d');
    canvas.width = size;
    canvas.height = size;
}

module.exports = function(el, red, green, blue) {
    if (!ctx) { return false; }
    if (typeof red === 'string') {
        ctx.fillStyle = red;
    } else {
        if (Array.isArray(red)) {
            blue = red[2];
            green = red[1];
            red = red[0];
        }
        ctx.fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';
    }
    ctx.fillRect(0, 0, size, size);
    // FF apparently doesn't listen to changes made to a
    // favicon's href attribute if the value is a data URI.
    // Remove and replace element to work around this.
    var parent = el.parentNode;
    if (parent) { parent.removeChild(el); }
    el.href = canvas.toDataURL();
    if (parent) { parent.appendChild(el); }
    return true;
};
