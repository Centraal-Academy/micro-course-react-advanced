
/* eslint-env jest */

import React from 'react'
import { shallow, mount } from 'enzyme'
import Button from '../../../src/components/Button'

describe('Button Test', () => {
  test('test for button', () => {
    const onClick = jest.fn()
    const element = shallow(<Button onClick={onClick}>Button Text</Button>)
    expect(element.text()).toEqual('Button Text')
    element.find('button').simulate('click')
    expect(onClick).toBeCalled()
  })
  test('test for button', () => {
    const onClick = jest.fn()
    const element = mount(<Button onClick={onClick}>Button Text</Button>)
    expect(element.text()).toEqual('Button Text')
    element.find('button').simulate('click')
    expect(onClick).toBeCalled()
  })
})
