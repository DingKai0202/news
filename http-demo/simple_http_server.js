const http = require('http')
const server = http.createServer()
server.listen(8808)
const qs = require('querystring')

server.on('request', (req, res) => {
	const url = req.url

	const path = url.substr(0, url.indexOf('?'))

	const queryString = url.substr(url.indexOf('?') + 1, url.length)

	query = qs.parse(queryString)
	
	switch (path) {
		case '/user':
			
			switch (request.method) {
				case 'GET':
					
					break;
			
				default:
					break;
			}
			break;
	
		default:
			break;
	}


	let resStr
	
	

	res.statusCode = 200
	res.end(resStr)
})


