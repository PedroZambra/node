const http = require('http');
const url = require('url');

process.env.IP = '127.0.0.1';
process.env.PORT = 5000;

http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname;
  if (pathname === '/') {
      res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write(
      `<h1>Index</h1>
        <ul>
          <li><a href="/quienes">&#191Quienes somos?</a></li>
          <li><a href="/donde">&#191Donde Estamos?</a></li>
          <li><a href="/que">&#191Que hacemos?</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>` 
    )
    res.end();
  } else if (pathname === '/quienes') {
      res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8'
    });
    res.end('¿Quienes somos?');
  } else if (pathname === '/donde') {
    res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('¿Donde Estamos?');
} else if (pathname === '/que') {
    res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('¿Que hacemos?');
} else if (pathname === '/contacto') {
    res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('Contacto');
} else if (pathname === '/alindex') {
      res.writeHead(301, {
      'Location': '/'
    });
    res.end();    
  } else {
      res.writeHead(404, {
      'Content-Type': 'text/plain'
    });
    res.end('ERROR 404!');
  }
}).listen(process.env.PORT, process.env.IP);
console.log(`Servidor funcionando en http://${process.env.IP}:${process.env.PORT}/`);