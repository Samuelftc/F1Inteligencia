// O Express é um framework para Node.js que facilita a criação de servidores HTTP e APIs.
import express from "express";

import campeonatoRoutes from "./routes/campeonato.routes.js";

// Cria a instância da aplicação Express.
const app = express();

// Middleware responsável por interpretar requisições com corpo JSON.
app.use(express.json());

// Endpoint para verificar se a API está respondendo.
app.get("/api/health", (_req, res) => {
    res.status(200).json({
        status: "ok",
        message: "F1 Intelligence API funcionando"
    });
});

app.use("/api/campeonatos", campeonatoRoutes);

// Exporta a aplicação para utilização pelo servidor.
export default app;