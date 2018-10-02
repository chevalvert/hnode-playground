const defaultOpts = {
  debug: true,
  autoClear: false,
  title: 'hnode-playground',
  fps: 60,
  hnode: {
    'PORT_SERVER': 3737,
    'TIME_TICK': 100,
    'TIME_OFFLINE': 1000,
    'TIME_GONE': 3000,
    'NLEDS_STRIPS': 178,
    'NSTRIPS_CLIENT': 2
  }
}

module.exports = (opts = {}, playground = function () {}) => {
  opts = Object.assign({}, defaultOpts, opts)
  process.title = opts.title

  const hnode = require('hnode')(opts.hnode)
  const server = new hnode.Server()

  server.setRate(1000 / opts.fps)

  if (opts.debug) {
    server.on('newnode', node => {
      node.on('start', () => console.log(`start ${node.ip}:${node.name}`))
      node.on('online', () => console.log(`online ${node.ip}:${node.name}`))
      node.on('offline', () => console.log(`offline ${node.ip}:${node.name}`))
      node.on('stop', () => console.log(`stop ${node.ip}:${node.name}`))
    })
  }

  let frameCount = 0

  server.on('tick', () => {
    frameCount++
    if (opts.autoClear) server.blackout()
    playground({
      frameCount,
      length: opts.hnode.NLEDS_STRIPS,
      light,
      clear: server.blackout.bind(server)
    })
  })

  server.start()

  function light (z, rgb = [255, 255, 255]) {
    const nodes = server.getAllNodes()
    nodes.forEach(node => {
      for (let i = 0; i < opts.hnode.NSTRIPS_CLIENT; i++) node.setLed(i, z, rgb)
    })
  }
}
