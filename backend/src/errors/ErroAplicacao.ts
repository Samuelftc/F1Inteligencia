/**
 * Classe personalizada para representar erros da aplicação.
 * Permite associar uma mensagem a um código de status HTTP,
 * facilitando o tratamento centralizado de erros.
 */
export class ErroAplicacao extends Error {
  constructor(
    // Código HTTP que será retornado ao cliente (400, 404, 502 etc.).
    public readonly status: number,
    mensagem: string
  ) {
    // Inicializa a mensagem utilizando a classe nativa Error.
    super(mensagem);

    // Identifica o erro como um erro personalizado da aplicação.
    this.name = "ErroAplicacao";
  }
}