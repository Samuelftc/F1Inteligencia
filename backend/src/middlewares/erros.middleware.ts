import type {
    Request,
    Response,
    NextFunction
} from "express";

import { ErroAplicacao } from "../errors/ErroAplicacao.js";

/**
 * Middleware responsável por centralizar os erros da API.
 * Identifica erros conhecidos e padroniza as respostas HTTP.
 * O Express exige quatro parâmetros para reconhecer um middleware de erro.
*/
export function tratarErros(erro: unknown, req: Request, res: Response, _next: NextFunction) {
    // Verifica se o erro foi criado pela nossa aplicação.
    if (erro instanceof ErroAplicacao) {
        return res.status(erro.status).json({
            erro: erro.message
        });
    }

    // Registra erros inesperados para investigação no servidor.
    console.error("Erro interno:", erro);

    // Evita expor detalhes internos da aplicação ao cliente.
    return res.status(500).json({
        erro: "Erro interno do servidor."
    });
}
