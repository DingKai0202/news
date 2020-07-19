function auth(req, res, next) {
  console.log(req.query)
  if(req.query.username === 'dingkai') {
    next()
  } else {
    res.end('please go away')
  }
}

module.exports = auth