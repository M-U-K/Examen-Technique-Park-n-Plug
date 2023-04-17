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
