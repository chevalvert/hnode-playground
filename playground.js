/**
 * These options will be used by hnode-playground when running `node index.js`
 * Note that the options will not benefit from HMR, and that you will need to
 * re-run `node index.js` when changing them.
 */
module.exports.options = {
  title: 'hnode-playground',
  debug: true,
  fps: 60,
  autoClear: true
}

/**
 * This function is called once each frame.
 */
module.exports.raf = ({ frameCount, length, clear, light }) => {
  for (let i = 0; i < length; i++) {
    light(frameCount % length, [255, 255, 255])
  }
}
