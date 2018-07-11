import { configure } from '@storybook/react'

function loadStories() {
  require('../src/stories/Button/Button')
}

configure(loadStories, module);