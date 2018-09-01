const fs = require('fs')
const pages = require('./pages.json')
const dir = 'p'

pages.forEach(page => {
  let html = `<!DOCTYPE html>
<html>
<head>
  <meta data-n-head="true" charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../styles.css">
</head>
<body>
  <iframe src="${page.docURL}"></iframe>
</body>
</html>
`
  fs.writeFileSync(dir + '/' + page.slug + '.html', html)
})

//fs.writeFileSync('old_citizens_after_review.sql', sql)
