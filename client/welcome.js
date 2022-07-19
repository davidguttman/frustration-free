const html = require('nanohtml')
const morph = require('nanomorph')

const state = require('./state')()

module.exports = function ({ name }) {
  const tree = render()
  state.on('*', key => morph(tree, render()))
  state.set({ name })
  return tree
}

function render () {
  return html`
    <div>
      <div class='sans-serif white-90 vh-100 dt w-100'>
        <div class='f1 dtc v-mid tc ph3 ph5-l'>
          Hello${state.name ? ` ${state.name}` : ''}!
        </div>
      </div>
    </div>
  `
}
