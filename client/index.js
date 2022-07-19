require('./style')
const hash = require('http-hash')()

const welcome = require('./welcome')

document.title = 'Frustration Free'

hash.set('/', welcome)
hash.set('/welcome/:name', welcome)

window.addEventListener('hashchange', function () {
  window.location.reload()
})

const route = hash.get(window.location.hash.slice(1))
const el = route.handler({ ...route.params, splat: route.splat })

document.body.appendChild(el)
