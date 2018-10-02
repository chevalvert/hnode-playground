#!/usr/bin/env node
require('module-alias/register')

require('@playground')({
  title: 'hnode-playground',
  debug: true,
  fps: 60,
  autoClear: true
}, ({ frameCount, length, clear, light }) => {
  for (let i = 0; i < length; i++) {
    light(frameCount % length, [255, 255, 255])
  }
})

require('@utils/keyboard')(key => {
  if (key.name === 'up') console.log('↑')
  if (key.name === 'down') console.log('↓')
})
