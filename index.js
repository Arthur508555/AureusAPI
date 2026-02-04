const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

let payload = { command: "print('Load🎉🎉🎉🎉')", version: 1 };

app.get('/', (req, res) => {
    res.send(`
        <body style="background:#000;color:#0f0;font-family:monospace;text-align:center;">
            <h1>LALOL CLOUD EXECUTOR V2</h1>
            <form action="/update" method="get">
                <textarea name="code" style="width:80%;height:200px;background:#111;color:#0f0;border:1px solid #0f0;"></textarea><br><br>
                <button type="submit" style="background:#0f0;color:#000;border:none;padding:15px;cursor:pointer;font-weight:bold;">EXECUTAR EM TODOS OS SERVIDORES</button>
            </form>
            <p>Versao: ${payload.version}</p>
        </body>
    `);
});

app.get('/api/control', (req, res) => res.json(payload));

app.get('/update', (req, res) => {
    if (req.query.code) {
        payload.command = req.query.code;
        payload.version++;
        res.send("Enviado! <a href='/'>Voltar</a>");
    }
});

app.listen(PORT, () => console.log('AureusAPI-1 Online'));
