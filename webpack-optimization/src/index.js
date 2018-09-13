import React from 'react'
import { render } from 'react-dom'
import ModuleA from './modules/moduleA.js'
import ModuleB from './modules/moduleB.js'

console.log(ModuleA, ModuleB)

const appElement = document.getElementById('app-container')
render(<h1>Hello Optimization</h1>, appElement)
