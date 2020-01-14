# GCode Preview
A simple [G-code](https://en.wikipedia.org/wiki/G-code) parser & viewer with 3D printing in mind. Written in Typescript. 

## 3D WebGL + pan/zoom/rotate controls
![Demo Animation](../assets/benchy.gif?raw=true)

## Demo
Go try the [interactive demo](https://gcode-preview.web.app/).


## Installation

 `npm install gcode-preview`

or

`yarn add gcode-preview`


### Quick start

html:
```
  <div id="gcode-preview">
```

javascript:
```  
  const gcode = 'G0 X0 Y0 Z0.2\nG1 X42 Y42'; // draw a horizontal line
  const preview = new WebGLPreview({
      targetId: 'gcode-preview',
  });
  
  preview.processGCode(gcode);
  preview.render();
```

### Vue.js integration
There's also a [vue.js example](https://github.com/remcoder/gcode-preview-vue-demo) that has a [Vue component](https://github.com/remcoder/gcode-preview-vue-demo/blob/master/src/components/GCodePreview.vue) to wrap the library.

## Known issues
### Preview doesn't render in Brave
This is caused by the device recognition shield in Brave. By changing the setting for "Device Recognition" in Shield settings to "Allow all device recognition attemps" or "Only block cross-site device recognition attemps" you should not get this error.
https://github.com/mrdoob/three.js/issues/16904

## Sponsors

A big thanks to these sponsors for their contributions. 

[<img width=42 src="http://logo.q42.com/q42-logo.svg" /> Q42 ](http://q42.com)

[<img width=42 src="https://www.duet3d.com/image/catalog/logo/50_blue_wifi.png"> Duet3D](https://www.duet3d.com/)
