# favicolor

Set a page's favicon to a solid color. [favicolor.ima.computer](http://favicolor.ima.computer)

[![Travis CI Build Status](https://travis-ci.org/CMTegner/favicolor.svg)](http://travis-ci.org/CMTegner/favicolor) [![Dependency Status](https://david-dm.org/CMTegner/favicolor/status.svg)](https://david-dm.org/CMTegner/favicolor)

[![NPM Module](https://nodei.co/npm/favicolor.png)](http://npm.im/favicolor)

[![Browser support](https://ci.testling.com/CMTegner/favicolor.png)](https://ci.testling.com/CMTegner/favicolor)

## Example

```js
var favicolor = require('favicolor');
var icon = document.querySelector('[rel=icon]');
favicolor(icon, 'red');
```

## Install

With [npm](http://npmjs.org) do:
```sh
$ npm install favicolor
```

`favicolor` is designed to work in the browser via a bundlers such as [browserify](http://browserify.org) and as a [stand-alone script](http://wzrd.in/standalone/favicolor@latest):

```html
<script src="http://wzrd.in/standalone/favicolor@latest"></script>
```

## Usage

```javascript
var favicolor = require('favicolor');
```

### favicolor(icon, colorString)
### favicolor(icon, rgbArray)
### favicolor(icon, red, green, blue)

`icon` is the favicon DOM element. The color can be specified by passing the RGB values as individual arguments, by passing an array containing the RGB values as the second argument, or by passing a string as the second argument. In the latter case you are free to use any valid color string, e.g. 'red', '#ff0000', 'rgb(255, 0, 0)', etc. *Note:* This method temporarily removes the specified element to work around a quirk in Firefox.

Examples:

```js
favicolor(icon, 68, 68, 68);
favicolor(icon, [13, 37, 42]);
favicolor(icon, 'cyan');
favicolor(icon, '#bada55');
favicolor(icon, 'hsla(170, 50%, 45%, 1)');
```
