# favicon-color

Set a page's favicon to a solid color

[![Travis CI Build Status](https://travis-ci.org/CMTegner/favicon-color.svg)](http://travis-ci.org/CMTegner/favicon-color) [![Dependency Status](https://david-dm.org/CMTegner/favicon-color/status.svg)](https://david-dm.org/CMTegner/favicon-color)

[![NPM Module](https://nodei.co/npm/favicon-color.png)](http://npm.im/favicon-color)

[![Browser support](https://ci.testling.com/CMTegner/favicon-color.png)](https://ci.testling.com/CMTegner/favicon-color)

## Example

```js
var colorize = require('favicon-color');
var icon = document.querySelector('[rel=icon]');
colorize(icon, 'red');
```

## Install

With [npm](http://npmjs.org) do:
```sh
$ npm install favicon-color
```

`favicon-color` is designed to work in the browser via a bundlers such as [browserify](http://browserify.org) and as a [stand-alone script](http://wzrd.in/standalone/favicon-color@latest):

```html
<script src="http://wzrd.in/standalone/favicon-color@latest"></script>
```

## Usage

```javascript
var colorize = require('favicon-color');
```

### colorize(icon, red, green, blue)

`icon` is the favicon DOM element. The color can be specified by passing the RGB values as individual arguments, by passing an array containing the RGB values as the second argument, or by passing a string as the second argument. In the latter case you are free to use any valid color string, e.g. 'red', '#ff0000', 'rgb(255, 0, 0)', etc. *Note:* This method temporarily removes the specified element to work around a quirk in Firefox.

Examples:

```js
colorize(icon, 68, 68, 68);
colorize(icon, [13, 37, 42]);
colorize(icon, 'cyan');
colorize(icon, '#bada55');
colorize(icon, 'hsla(170, 50%, 45%, 1)');
```
