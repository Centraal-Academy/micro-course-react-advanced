import React from 'react'

export default function Button (props) {
  return <button className='Button' {...props}>{props.children}</button>
}
