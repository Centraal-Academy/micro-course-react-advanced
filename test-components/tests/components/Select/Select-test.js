/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Select from '../../../src/components/Select'
describe('Select component test suite', () => {
  test('The select should have two elements options when recieves two items', () => {
    const items = ['super mario world', 'megaman x']
    const element = shallow(<Select items={items} />)
    expect(element.find('select').children()).toHaveLength(2)
  })
})
