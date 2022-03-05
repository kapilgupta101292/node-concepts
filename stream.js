const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
	// Solution - 1
	// fs.readFile('test-file.txt', (err, data) => {
	// 	if (err) console.log(err);
	// 	res.end(data);
	// });

	// Solution - 2 Streams, Solve the problem of storing data in memory
	// const readable = fs.createReadStream('test-file.txt');
	// readable.on('data', (chunk) => {
	// 	res.write(chunk);
	// });

	// readable.on('end', () => {
	// 	res.end();
	// });

	// readable.on('error', (err) => {
	// 	console.error(err);
	// 	res.statusCode = 500;
	// 	res.end('There was an error');
	// });

	// Solution 3: Solve the problem of backpressure
	const readable = fs.createReadStream('test-file.txt');
	readable.pipe(res);
});

server.listen(8000, 'localhost', () => {
	console.log('Listening ...');
});
