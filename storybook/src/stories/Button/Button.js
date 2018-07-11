import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withNotes } from '@storybook/addon-notes'
import Button from '../../components/Button'
import withTests from './withTest'

storiesOf('Button', module)
  .addDecorator(withTests('Button'))
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('Button with notes',
    withNotes('Sample text')(() => <Button onClick={action('clicked')}>Hello Button</Button>)
  )
