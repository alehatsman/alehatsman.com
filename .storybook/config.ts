import { configure, addDecorator } from '@storybook/react'
import { GlobalStyleDecorator } from './decorators'
import Centered from '@storybook/addon-centered/react'
import '../public/static/css/typography.css'

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.tsx?$/)
function loadStories () {
  req.keys().forEach(filename => req(filename))
}

addDecorator(GlobalStyleDecorator)
addDecorator(Centered)
configure(loadStories, module)
