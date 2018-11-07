# hnode-playground [<img src="https://github.com/chevalvert.png?size=100" align="right">](http://chevalvert.fr/)

*Basic playground to test [`hnode`](https://github.com/Hemisphere-Project/stratum-hnode/) hardware*

<br>

## Installation
```sh
$ git clone https://github.com/chevalvert/hnode-playground.git hnode-playground
$ cd hnode-playground
$ npm install
```
<sup>_Assuming you have [`node` >= 8](https://nodejs.org/en/download/)_</sup>

## Usage

```sh
$ npm start
```

###### `playground.js` exposed parameters
```js
module.exports.raf = ({
  frameCount,  // How many frames from the start of hnode
  length,      // Length of the stripled controlled by hnode
  clear,       // clear(): function which clears the stripled when called
  light        // light(i, [r,g,b]) lights up pixel #i with the color rgb
}) => {
  …
}
```
###### `playground.js` options
```js
module.exports.options = {
  title: 'hnode-playground', // Title of the node process
  debug: true,               // Enable debug logging to stdout
  fps: 60,                   // hnode frameRate
  autoClear: true            // If set to false, you'll have to manually call clear()
}
```

## Network configuration
To connect to [`hnode`](https://github.com/Hemisphere-Project/stratum-hnode/) via UDP, use the following IPV4 config:
```
IP Address: 192.168.0.200
Subnet Mask: 255.255.255.0
Router: 192.168.0.1
```


## License
[MIT.](https://tldrlegal.com/license/mit-license)
