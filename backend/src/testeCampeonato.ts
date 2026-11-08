
import { buscarClassificacaoPilotos } from "./services/campeonato.services.js";

async function testar() {
  try {
    const dados = await buscarClassificacaoPilotos(2021);

    console.log("Temporada:", dados.temporada);
    console.log("Rodada:", dados.rodada);
    console.table(dados.classificacao);
  } catch (erro) {
    console.error("Erro:", erro);
  }
}

testar();
