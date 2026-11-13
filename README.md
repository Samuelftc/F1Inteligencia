
# F1 Intelligence

**F1 Intelligence** é uma plataforma web de análise de dados da Fórmula 1, desenvolvida para transformar informações de corridas, pilotos, equipes e temporadas em estatísticas, comparações e visualizações interativas.

O projeto busca proporcionar uma experiência moderna e intuitiva para fãs de automobilismo, combinando uma interface esportiva premium com ferramentas de análise de desempenho.

A temporada inicial é **2025**, com suporte arquitetural para consultar outras temporadas disponíveis nas fontes de dados utilizadas.

> **Status:** Em desenvolvimento — MVP  
> **Etapa atual:** Desenvolvimento da página de Campeonato.

---

## Status do projeto

O desenvolvimento segue uma abordagem incremental: planejamento visual, implementação do frontend, desenvolvimento dos endpoints necessários, integração com dados reais e revisão técnica.

### Progresso

- [x] Definição do escopo inicial do MVP
- [x] Planejamento da identidade visual
- [x] Desenvolvimento dos wireframes
- [x] Implementação da estrutura visual da Home
- [x] Responsividade da Home
- [x] Revisões técnicas do frontend da Home
- [x] Estruturação do backend com Node.js, Express e TypeScript
- [x] Integração do backend com a Jolpica F1 API
- [x] Implementação dos endpoints necessários para a Home
- [x] Implementação de validação com Zod
- [x] Implementação de cache em memória
- [x] Tratamento centralizado de erros
- [x] Testes manuais dos endpoints
- [ ] Desenvolvimento da página de Campeonato
- [ ] Desenvolvimento das páginas de corridas e análises
- [ ] Testes automatizados
- [ ] Deploy da primeira versão

---

## Objetivos

O F1 Intelligence busca oferecer uma plataforma centralizada para consulta e análise de informações históricas da Fórmula 1.

Seus principais objetivos são:

- Apresentar classificações de pilotos e construtores.
- Disponibilizar calendários e resultados de corridas.
- Permitir a exploração de dados históricos de Grandes Prêmios.
- Comparar o desempenho de pilotos utilizando métricas estatísticas.
- Apresentar dados por meio de gráficos e visualizações interativas.
- Facilitar a compreensão de informações técnicas do automobilismo.
- Construir uma arquitetura organizada e preparada para expansão.

Além dos objetivos funcionais, o projeto possui caráter educacional, envolvendo desenvolvimento frontend, backend, integração de APIs, validação de dados e arquitetura de software.

---

## Funcionalidades

### 1. Home — Dashboard da temporada

A Home é a página principal da plataforma, reunindo informações relevantes da temporada selecionada.

**Funcionalidades desenvolvidas:**

- Interface esportiva premium.
- Seleção de temporada.
- Classificação do campeonato de pilotos.
- Classificação do campeonato de construtores.
- Informações da última corrida.
- Destaque da melhor volta.
- Calendário de Grandes Prêmios.
- Navegação para outras áreas da plataforma.
- Layout responsivo para diferentes dispositivos.
- Componentes com recursos de acessibilidade.

A página utiliza componentes React organizados por responsabilidade, com estilização CSS e elementos interativos.

O backend disponibiliza os dados necessários para as principais seções da Home.

### 2. Campeonato — Classificações

**Status: Em desenvolvimento.**

Página dedicada à visualização das classificações completas dos campeonatos de pilotos e construtores.

**Funcionalidades previstas:**

- Seleção de temporada.
- Alternância entre pilotos e construtores.
- Classificação completa.
- Destaque dos líderes.
- Indicadores de pontos e vitórias.
- Diferença de pontuação entre competidores.
- Pesquisa e filtros locais.
- Layout responsivo.

Os endpoints necessários para consultar as classificações já estão disponíveis no backend.

### 3. Race Explorer — Análise de corridas

**Status: Planejado.**

O Race Explorer permitirá explorar informações detalhadas de corridas históricas.

**Funcionalidades previstas:**

- Seleção de temporada.
- Seleção de Grande Prêmio.
- Seleção de sessão.
- Consulta dos resultados.
- Visualização dos tempos de volta.
- Análise do ritmo dos pilotos.
- Gráficos de desempenho.
- Estatísticas de voltas e posições.

A implementação dependerá da disponibilidade e da granularidade dos dados fornecidos pelas fontes externas.

### 4. Driver Comparison — Comparação de pilotos

**Status: Planejado.**

Ferramenta destinada à comparação estatística do desempenho de dois pilotos.

**Funcionalidades previstas:**

- Seleção de dois pilotos.
- Comparação dos tempos de volta.
- Comparação do ritmo médio.
- Comparação do ritmo mediano.
- Identificação da melhor volta.
- Análise da diferença de desempenho.
- Gráficos comparativos.

---

## Tecnologias

### Frontend

| Tecnologia | Finalidade |
|------------|------------|
| React 19 | Construção da interface |
| TypeScript | Tipagem estática |
| Vite | Ambiente de desenvolvimento e build |
| CSS3 | Estilização e responsividade |
| Lucide React | Biblioteca de ícones |
| Framer Motion | Animações e transições |
| Swiper | Componentes de navegação e carrosséis |

### Backend

| Tecnologia | Finalidade |
|------------|------------|
| Node.js | Ambiente de execução |
| Express 5 | Construção da API REST |
| TypeScript | Tipagem estática |
| Zod | Validação dos dados externos |
| Fetch API | Comunicação com a Jolpica |
| dotenv | Configuração por variáveis de ambiente |
| tsx | Execução do ambiente de desenvolvimento |

### Ferramentas

- Git
- GitHub
- Visual Studio Code
- Postman
- npm
- ESLint

---

## Fonte de dados

### Jolpica F1 API

A principal fonte de dados utilizada atualmente pelo backend é a **Jolpica F1 API**, sucessora da API Ergast.

A integração permite consultar:

- Classificações de pilotos.
- Classificações de construtores.
- Calendários de temporadas.
- Resultados da última corrida de uma temporada.
- Informações sobre a melhor volta de uma corrida.

Documentação: https://api.jolpi.ca/

### Fontes consideradas para expansão

**OpenF1**

API com informações sobre sessões, pilotos, posições, voltas e outros dados relacionados às corridas.

Documentação: https://openf1.org/

**FastF1**

Biblioteca Python voltada para análise de sessões históricas, tempos de volta e telemetria.

Documentação: https://docs.fastf1.dev/

> OpenF1 e FastF1 fazem parte das possibilidades de expansão. Não são dependências da implementação atual.

---

## Arquitetura

O projeto utiliza uma arquitetura separada entre frontend e backend.

```text
                  F1 Intelligence
                         |
                  Frontend React
                         |
                    API REST
                         |
                Backend Express
                         |
             +-----------+-----------+
             |                       |
        Controllers              Middlewares
             |                       |
          Services             Tratamento de erros
             |
      Validação com Zod
             |
       Cache em memória
             |
       Jolpica F1 API
```

### Frontend

Responsável por:

- Apresentação das informações.
- Interação com o usuário.
- Navegação entre páginas.
- Gerenciamento dos estados da interface.
- Consumo dos endpoints do backend.
- Responsividade e acessibilidade.

### Backend

Responsável por:

- Disponibilizar endpoints REST.
- Validar parâmetros das requisições.
- Consultar fontes externas.
- Validar respostas utilizando Zod.
- Transformar os dados para os contratos internos.
- Armazenar respostas temporariamente em cache.
- Centralizar o tratamento de erros.
- Evitar requisições simultâneas duplicadas.

### Controllers

Os controllers recebem as requisições HTTP, validam os parâmetros necessários e delegam as operações aos services.

### Services

Os services concentram a comunicação com a Jolpica e o processamento das respostas.

Essa separação evita concentrar regras de negócio diretamente nas rotas.

### Validação com Zod

As respostas da API externa são validadas antes de serem transformadas e disponibilizadas aos consumidores.

Isso reduz o risco de processar estruturas inesperadas ou dados incompatíveis com os contratos utilizados pela aplicação.

### Cache em memória

O backend possui um mecanismo de cache utilizando `Map`.

Características:

- Armazenamento temporário de respostas.
- Identificação por chaves específicas.
- Controle de expiração por TTL.
- Remoção de entradas expiradas quando consultadas.
- Compartilhamento de requisições simultâneas para a mesma chave.

O TTL atualmente utilizado nos principais services é de **24 horas**.

O cache existe apenas na memória do processo Node.js e é perdido quando o servidor é reiniciado.

### Tratamento de erros

O backend utiliza uma classe personalizada `ErroAplicacao` e um middleware centralizado para padronizar respostas HTTP.

Entre os cenários tratados estão:

- Temporadas inválidas.
- Dados não encontrados.
- Falhas de comunicação com a Jolpica.
- Respostas externas inválidas.
- Erros inesperados do servidor.

---

## Estrutura do projeto

O projeto possui separação entre a aplicação React e a API Express.

A organização lógica das principais responsabilidades é:

```text
F1Inteligencia/
|
|-- frontend/
|   |-- public/
|   |-- src/
|   |   |-- components/
|   |   |-- pages/
|   |   |-- styles/
|   |   |-- types/
|   |   `-- ...
|   `-- package.json
|
|-- backend/
|   |-- src/
|   |   |-- controllers/
|   |   |-- services/
|   |   |-- routes/
|   |   |-- schemas/
|   |   |-- types/
|   |   |-- middlewares/
|   |   |-- errors/
|   |   |-- utils/
|   |   |-- app.ts
|   |   `-- server.ts
|   `-- package.json
|
|-- README.md
`-- ...
```

> A árvore representa a organização lógica dos módulos. Os diretórios e arquivos devem ser conferidos conforme a estrutura atual do repositório.

---

## API REST

O backend disponibiliza endpoints organizados por recurso e temporada.

### Campeonato

**Classificação de pilotos**

```http
GET /api/campeonatos/:temporada/pilotos
```

Retorna a classificação dos pilotos de uma temporada, incluindo:

- Posição.
- Identificador do piloto.
- Código.
- Nome.
- Nacionalidade.
- Pontos.
- Vitórias.
- Construtores associados.

**Classificação de construtores**

```http
GET /api/campeonatos/:temporada/construtores
```

Retorna a classificação das equipes, incluindo:

- Posição.
- Identificador do construtor.
- Nome.
- Nacionalidade.
- Pontos.
- Vitórias.

### Corridas

**Última corrida da temporada**

```http
GET /api/corridas/:temporada/ultima
```

Retorna informações da última corrida disponível para a temporada solicitada, incluindo circuito, data e resultados dos pilotos.

**Melhor volta da última corrida**

```http
GET /api/corridas/:temporada/ultima/melhor-volta
```

Retorna as informações da melhor volta registrada nos resultados da última corrida disponível.

**Calendário da temporada**

```http
GET /api/corridas/:temporada
```

Retorna o calendário de Grandes Prêmios, incluindo:

- Rodada.
- Nome da corrida.
- Circuito.
- País.
- Localidade.
- Data.
- Horário, quando disponível.
- Sessões do final de semana, quando disponíveis.

### Validação de temporada

O backend aceita temporadas representadas por números inteiros entre **1950 e o ano atual**.

Uma temporada dentro desse intervalo não garante a existência de dados na fonte externa.

### Códigos HTTP

| Código | Significado |
|--------|-------------|
| 200 | Requisição realizada com sucesso |
| 400 | Parâmetro inválido |
| 404 | Dados não encontrados |
| 500 | Erro interno do servidor |
| 502 | Falha na integração com a API externa |

### Exemplo de consulta

```http
GET http://localhost:3001/api/campeonatos/2025/pilotos
```

---

## Instalação e execução

### Pré-requisitos

- Node.js em versão compatível com as dependências.
- npm.
- Git.

### 1. Clonar o repositório

```bash
git clone https://github.com/Samuelftc/F1Inteligencia.git
```

### 2. Acessar o projeto

```bash
cd F1Inteligencia
```

### 3. Executar o frontend

No diretório que contém o `package.json` do frontend:

```bash
npm install
npm run dev
```

O Vite normalmente disponibiliza a aplicação em:

```text
http://localhost:5173
```

### 4. Executar o backend

Em outro terminal, acesse o diretório do backend:

```bash
cd backend
npm install
npm run dev
```

O servidor Express utiliza, por padrão, a porta `3001`, quando nenhuma outra porta é configurada.

```text
http://localhost:3001
```

### 5. Gerar o build

Execute o comando de build no diretório correspondente.

```bash
npm run build
```

O frontend e o backend possuem processos de build independentes.

---

## Temporadas

A temporada inicial utilizada na plataforma é **2025**.

O backend foi estruturado para consultar diferentes temporadas por meio de parâmetros nas rotas.

Entre as temporadas previstas para navegação estão:

- 2025
- 2024
- 2023

A arquitetura também permite solicitar outras temporadas compatíveis com os dados disponibilizados pela Jolpica.

A disponibilidade de determinadas informações pode variar conforme a temporada.

---

## Responsividade

A interface utiliza uma abordagem desktop-first, com adaptações para diferentes tamanhos de tela.

Resoluções utilizadas como referência:

| Dispositivo | Resolução |
|-------------|-----------|
| Desktop | 1920 × 1080 |
| Notebook | 1366 × 768 |
| Notebook | 1440 × 900 |
| Tablet | 768 × 1024 |
| Smartphone | 390 × 844 |
| Smartphone | 360 × 800 |

As resoluções são referências de desenvolvimento e teste, não limitações fixas da aplicação.

O projeto prioriza:

- Legibilidade.
- Navegação intuitiva.
- Organização visual.
- Acessibilidade.
- Adaptação de tabelas e componentes.
- Consistência entre dispositivos.

---

## Roadmap

### Fase 1 — Home

- [x] Definição da identidade visual
- [x] Planejamento dos wireframes
- [x] Configuração inicial do frontend
- [x] Desenvolvimento da interface
- [x] Implementação dos componentes principais
- [x] Responsividade para notebooks
- [x] Responsividade para dispositivos móveis
- [x] Revisão técnica dos componentes

### Fase 2 — Backend da Home

- [x] Configuração do ambiente Node.js
- [x] Estruturação da API com Express
- [x] Implementação de controllers e services
- [x] Criação das rotas REST
- [x] Integração com a Jolpica
- [x] Validação de respostas com Zod
- [x] Validação dos parâmetros de temporada
- [x] Tratamento centralizado de erros
- [x] Implementação de cache em memória
- [x] Deduplicação de requisições simultâneas
- [x] Endpoints de classificação de pilotos
- [x] Endpoints de classificação de construtores
- [x] Endpoint de última corrida
- [x] Endpoint de melhor volta
- [x] Endpoint de calendário
- [x] Testes manuais dos endpoints
- [x] Revisão técnica do backend

### Fase 3 — Integração da Home

- [x] Validação final do consumo dos endpoints pelo React
- [x] Revisão dos estados de carregamento e erro
- [x] Validação dos dados apresentados na interface
- [x] Testes de integração

### Fase 4 — Campeonato

- [x] Definição inicial do escopo
- [x] Planejamento visual
- [ ] Desenvolvimento do frontend
- [ ] Implementação da classificação completa
- [ ] Indicadores estatísticos
- [ ] Alternância entre pilotos e construtores
- [ ] Seleção de temporada
- [ ] Responsividade
- [ ] Integração com o backend
- [ ] Revisão técnica

### Fase 5 — Race Explorer

- [ ] Desenvolvimento da interface
- [ ] Seleção de corridas e sessões
- [ ] Consulta de resultados
- [ ] Processamento dos tempos de volta
- [ ] Implementação dos gráficos
- [ ] Integração com o backend

### Fase 6 — Driver Comparison

- [ ] Desenvolvimento da interface
- [ ] Seleção dos pilotos
- [ ] Implementação das métricas comparativas
- [ ] Cálculo de ritmo médio e mediano
- [ ] Implementação dos gráficos
- [ ] Integração com o backend

### Fase 7 — Finalização do MVP

- [ ] Testes funcionais
- [ ] Testes automatizados
- [ ] Validação dos cálculos estatísticos
- [ ] Revisão geral de responsividade
- [ ] Otimizações de desempenho
- [ ] Documentação final da API
- [ ] Deploy do frontend
- [ ] Deploy do backend
- [ ] Publicação da primeira versão

---

## Critérios de conclusão do MVP

O MVP será considerado concluído quando:

1. A Home apresentar informações reais e consistentes da temporada selecionada.
2. O usuário conseguir consultar classificações completas de pilotos e construtores.
3. O calendário e os resultados das corridas estiverem disponíveis.
4. O Race Explorer permitir explorar dados históricos de corridas.
5. O Driver Comparison permitir comparar pilotos utilizando métricas estatísticas.
6. O frontend estiver integrado ao backend.
7. A aplicação funcionar adequadamente nos principais tamanhos de tela.
8. Os dados externos forem validados antes de serem utilizados.
9. A aplicação estiver publicada e acessível.
10. O repositório possuir documentação suficiente para instalação e execução.

---

## Funcionalidades futuras

### Strategy Lab

Ferramentas para análise de estratégias de corrida, incluindo paradas nos boxes, compostos de pneus e evolução de desempenho.

### Telemetry Lab

Visualização de dados de telemetria, como velocidade, aceleração e frenagem, conforme a disponibilidade dos dados.

### Live Race Center

Acompanhamento de sessões em andamento, condicionado à disponibilidade e às condições de acesso aos dados em tempo real.

### Análises avançadas

Possíveis expansões incluem:

- Comparações entre temporadas.
- Estatísticas históricas de pilotos e equipes.
- Análise de consistência.
- Evolução de desempenho.
- Comparação de estratégias.
- Visualizações estatísticas avançadas.

### Persistência de dados

Uma futura etapa poderá incluir banco de dados para armazenar informações históricas e resultados processados.

A escolha da tecnologia e a modelagem serão definidas conforme os requisitos dessa evolução.

---

## Qualidade e boas práticas

O desenvolvimento segue princípios de organização, manutenção e confiabilidade.

Entre as práticas adotadas estão:

- Componentização e reutilização de código.
- Tipagem estática com TypeScript.
- Separação de responsabilidades.
- Padronização de nomenclatura.
- Validação de dados externos.
- Tratamento centralizado de erros.
- Organização das regras de negócio.
- Versionamento com Git.
- Commits descritivos.
- Revisões técnicas incrementais.
- Documentação progressiva.
- Testes manuais dos endpoints.

Testes automatizados e validações adicionais fazem parte das próximas etapas.

---

## Contribuições

O F1 Intelligence é um projeto pessoal em desenvolvimento.

Sugestões, relatos de problemas e propostas de melhoria poderão ser registrados por meio das Issues do repositório.

Contribuições externas poderão ser avaliadas conforme a evolução do projeto.

---

## Autor

**Samuel Ferreira**

Desenvolvedor Full-Stack

- GitHub: https://github.com/Samuelftc
- LinkedIn: https://www.linkedin.com/in/samuel-ferreira-desenvolvedor/
- Portfólio: https://samuelferreiradev.netlify.app/

---

## Aviso legal

O F1 Intelligence é um projeto independente, desenvolvido para fins educacionais, informativos e de portfólio.

O projeto não possui afiliação, associação ou endosso oficial da Formula 1, FIA ou das equipes participantes do campeonato.

Nomes, marcas e demais propriedades intelectuais pertencem aos seus respectivos titulares.

Os dados apresentados poderão ser provenientes de serviços de terceiros, sujeitos às respectivas condições de utilização e disponibilidade.

---

**F1 Intelligence — Transformando dados da Fórmula 1 em análises.**
