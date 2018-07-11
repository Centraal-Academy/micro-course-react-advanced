import React from 'react'

export default function Button (props) {
  const { children, ...properties } = props
  const style = { fontSize: '1.5rem' }
  return <button style={style} {...properties} >{children}</button>
}
