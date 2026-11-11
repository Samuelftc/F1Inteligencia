/**
 * Representa uma entrada armazenada no cache.
 *
 * T é um tipo genérico, permitindo armazenar diferentes
 * estruturas de dados, como pilotos, construtores e corridas.
 */
interface EntradaCache<T> {
    dados: T;
    expiraEm: number;
}

/**
 * Armazena os dados em memória utilizando Map.
 *
 * string: chave que identifica cada entrada.
 * unknown: permite armazenar diferentes tipos de dados.
 *
 * Exemplo de chave: "campeonato:pilotos:2025".
 */
const cache = new Map<string, EntradaCache<unknown>>();

/**
 * Armazena as requisições que ainda estão em andamento.
 *
 * A chave identifica o recurso solicitado.
 * A Promise representa a operação que está sendo executada.
 *
 * Permite que múltiplas chamadas compartilhem uma mesma
 * requisição, evitando consultas simultâneas duplicadas.
 */
const requisicoesPendentes = new Map<string, Promise<unknown>>();

/**
 * Consulta uma entrada armazenada no cache.
 *
 * Retorna os dados caso a chave exista e não tenha expirado.
 * Caso contrário, retorna null.
 *
 * T representa o tipo esperado dos dados recuperados.
 */
export function obterCache<T>(chave: string): T | null {

    // Procura uma entrada pela chave informada.
    const entrada = cache.get(chave);

    // Cache MISS: não existe uma entrada para essa chave.
    if (!entrada) {
        return null;
    }

    // Verifica se o tempo de validade da entrada terminou.
    if (Date.now() >= entrada.expiraEm) {

        // Remove a entrada expirada para evitar reutilizá-la.
        cache.delete(chave);

        return null;
    }

    // Cache HIT: retorna os dados armazenados e ainda válidos.
    // O "as T" informa ao TypeScript o tipo esperado.
    return entrada.dados as T;
}

/**
 * Armazena uma nova entrada no cache.
 *
 * chave: identificador único dos dados.
 * dados: informações que serão armazenadas.
 * tempoVida: duração do cache em milissegundos (TTL).
 *
 * Se a chave já existir, seu conteúdo será substituído.
 */
export function salvarCache<T>(
    chave: string,
    dados: T,
    tempoVida: number
): void {

    // Calcula o horário em que os dados deixarão de ser válidos.
    const expiraEm = Date.now() + tempoVida;

    // Armazena os dados juntamente com seu prazo de validade.
    cache.set(chave, {
        dados,
        expiraEm
    });
}



/**
 * Executa uma operação assíncrona apenas se não existir
 * outra operação em andamento para a mesma chave.
 *
 * Se já existir uma Promise pendente, reutiliza essa Promise.
 *
 * T representa o tipo do resultado esperado.
 */
export async function executarUmaVez<T>(
    chave: string,
    operacao: () => Promise<T>
): Promise<T> {

    // Verifica se já existe uma requisição em andamento.
    const requisicaoExistente = requisicoesPendentes.get(chave);

    if (requisicaoExistente) {
        console.log(`[REQUISIÇÃO COMPARTILHADA] ${chave}`);

        // Reutiliza a Promise da operação que já está executando.
        return requisicaoExistente as Promise<T>;
    }

    // Inicia uma nova operação assíncrona.
    const requisicao = Promise.resolve().then(operacao);

    // Registra a Promise para que outras chamadas possam reutilizá-la.
    requisicoesPendentes.set(chave, requisicao);

    try {
        // Aguarda a conclusão da operação original.
        return await requisicao;
    } finally {

        // Remove a Promise ao finalizar, mesmo em caso de erro.
        // Isso permite novas tentativas em chamadas futuras.
        requisicoesPendentes.delete(chave);
    }
}
