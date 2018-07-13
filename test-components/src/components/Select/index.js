import React from 'react'

export default function Select (props) {
  const {
    items = [],
    defaultOption = 'Select a option'
  } = props
  return (
    <select {...props}>
      <option>{defaultOption}</option>
      {items.map(item => <option key={item}>{item}</option>)}
    </select>
  )
}
