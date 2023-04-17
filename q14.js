const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Bonjour !');
        res.end();
    }
    else if (req.url.startsWith('/hello')) {
        const params = new URLSearchParams(req.url.slice(req.url.indexOf('?')));
        const nom = params.get('nom');
        if (nom) {
            res.write(`Bonjour, ${nom} !`);
            res.end();
        }
        else {
            res.write('Quel est votre nom ?');
            res.end();
        }
    }
    else if (req.method === 'POST' && req.url === '/chat') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const message = JSON.parse(body).msg;
            if (message === 'ville') {
                res.write('Nous sommes à Paris');
                res.end();
            } else if (message === 'météo') {
                res.write('Il fait beau');
                res.end();
            } else {
                res.write('ERROR 404');
                res.end();
            }
        });
    }
    else {
        res.statusCode = 404;
        res.write('ERROR 404');
        res.end();
    }
});

const PORT = 8000;
server.listen(PORT, () => {
    console.log(`port ${PORT}`);
});
