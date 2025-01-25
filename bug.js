const http = require('http');

const server = http.createServer((req, res) => {
  // This is where the bug is. The res.end() is called before the data is written to the response, resulting in an empty response.
  res.end();
  res.write('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});