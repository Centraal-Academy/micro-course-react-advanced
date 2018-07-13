/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Select from '../../../src/components/Select'
describe('Select component test suite', () => {
  test('The select should have 3 children when recieves two items', () => {
    const items = ['super mario world', 'megaman x']
    const element = shallow(<Select items={items} />)
    expect(element.find('select').children()).toHaveLength(3)
  })

  test('The default option can be specified or not', () => {
    const wrapperElement = shallow(<Select />)
    let defaultOption = wrapperElement.find('select').childAt(0)
    expect(defaultOption.text()).toEqual('Select a option')

    const customOptionMessage = 'Choose one'
    wrapperElement.setProps({ defaultOption: customOptionMessage })
    defaultOption = wrapperElement.find('select').childAt(0)
    expect(defaultOption.text()).toEqual(customOptionMessage)
  })

  test('Should call a function when selected option has changed', () => {
    const spyOn = jest.fn()
    const wrapperElement = shallow(<Select onChange={spyOn} />)
    wrapperElement.find('select').simulate('change')
    expect(spyOn).toBeCalled()
  })

  test('The if value is provided must be match with option selected', () => {
    const items = ['super mario world', 'megaman x']
    const valueSelected = 'megaman x'
    const wrapperElement = shallow(<Select items={items} value={valueSelected} />)
    const select = wrapperElement.find('select')
    expect(select.prop('value')).toEqual(valueSelected)
  })
})
