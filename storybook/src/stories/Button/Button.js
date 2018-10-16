import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withNotes } from '@storybook/addon-notes'
import { linkTo } from '@storybook/addon-links'
import Button from '../../components/Button'
import withTests from './withTest'

storiesOf('Button', module)
  .addDecorator(withTests('Button'))
  .add('Simple button', () => (
    <Button onClick={linkTo('Button', 'Button with notes')}>Go Button Two</Button>
  ))
  .add('Button with notes',
    withNotes('Sample text')(() => <Button onClick={action('clicked')}>Button Two</Button>)
  )
