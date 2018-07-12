import express from 'express'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './client/App'
import { indexTemplate } from './modules/template'

const app = express()

app.use(express.static(path.resolve(__dirname, 'dist')))

app.get('/*', function (req, res) {
  const context = {}

  const rootComponent = (
    <StaticRouter context={context} location={req.url}>
      <App />
    </StaticRouter>
  )

  const renderedDOM = renderToString(rootComponent)

  res.set('Content-Type', 'text/html')
  res.status(200).send(indexTemplate(renderedDOM))
  res.end()
})

app.listen(8000)
