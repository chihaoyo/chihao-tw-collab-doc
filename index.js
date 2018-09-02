const fs = require('fs')
const sitemap = require('./sitemap.json')

function generatePageHTML(dir, docURL) {
  let depth = dir.split('/')
  let baseURL = ''
  for(let i = 0; i < depth.length - 2; i++) {
    baseURL += '../'
  }
  if(!baseURL) {
    baseURL = './'
  }
  return `<!DOCTYPE html>
<html>
<head>
  <meta data-n-head="true" charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="${baseURL}styles.css">
</head>
<body>
  <iframe src="${docURL}"></iframe>
</body>
</html>
`
}

function writePage(page, dir, fileName) {
  fs.writeFileSync(dir + fileName, generatePageHTML(dir, page.docURL))
}

// write index page
writePage(sitemap.index, './', 'index.html')

// write pages
const dir = 'p'
sitemap.pages.forEach(page => writePage(page, `./${dir}/`, `${page.slug}.html`))

//fs.writeFileSync('old_citizens_after_review.sql', sql)
