import React from 'react'

export default function Select (props) {
  const { items = [] } = props
  return (
    <select {...props}>
      {items.map(item => <option key={item}>{item}</option>)}
    </select>
  )
}
