
/* eslint-env jest */
/* global Enzyme */

import Button from '../../../src/components/Button'
const { shallow } = Enzyme

describe('Button', () => {
  test('test for button', () => {
    const onClick = jest.fn()
    const element = shallow(<Button onClick={onClick}>Button Text</Button>)
    expect(element.text()).toEqual('Button Text')
    element.find('button').simulate('click')
    expect(onClick).toBeCalled()
  })
})
