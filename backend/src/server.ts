// Carrega as variáveis de ambiente do arquivo .env.
import "dotenv/config";

// Importa a aplicação Express configurada em app.ts.
import app from "./app.js";

// Define a porta do servidor, utilizando 3001 como padrão.
const PORT = Number(process.env.PORT) || 3001;

// Inicializa o servidor HTTP na porta configurada.
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});