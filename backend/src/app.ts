// O Express é um framework para Node.js que facilita a criação de servidores HTTP e APIs.
import express from "express";
import campeonatoRoutes from "./routes/campeonato.routes.js";
import corridaRoutes from "./routes/corrida.routes.js"

import { tratarErros } from "./middlewares/erros.middleware.js";

// Cria a instância da aplicação Express.
const app = express();

// Middleware responsável por interpretar requisições com corpo JSON.
app.use(express.json());

// Rotas da API
app.use("/api/campeonatos", campeonatoRoutes);
app.use("/api/corridas", corridaRoutes);

// Middleware centralizado de tratamento de erros
app.use(tratarErros);

// Exporta a aplicação para utilização pelo servidor.
export default app;