import { configure, addDecorator } from '@storybook/react'
import { GlobalStyleDecorator } from './decorators'
import centered from '@storybook/addon-centered'

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/)
function loadStories () {
  req.keys().forEach(filename => req(filename))
}

addDecorator(GlobalStyleDecorator)
addDecorator(centered)
configure(loadStories, module)
