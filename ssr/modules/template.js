export function indexTemplate (componentRendered) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>SSR</title>
      </head>
      <body>
        <div id="app-container">${componentRendered}</div>
        <script src="./app.js"></script>
      </body>
    </html>
  `
}
