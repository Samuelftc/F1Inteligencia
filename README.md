
# F1 Intelligence

**F1 Intelligence** é uma plataforma web de análise de dados da Fórmula 1, desenvolvida para transformar informações de corridas, pilotos, equipes e temporadas em estatísticas, comparações e visualizações interativas.

O projeto tem como objetivo proporcionar uma experiência moderna e intuitiva para fãs de automobilismo, combinando uma interface esportiva premium com ferramentas de análise de desempenho.

A plataforma está em desenvolvimento e terá como temporada inicial a **Fórmula 1 de 2025**, com uma arquitetura planejada para suportar múltiplas temporadas.

## Status do projeto

**Em desenvolvimento — MVP**

O desenvolvimento está dividido em etapas incrementais, começando pela interface da Home, seguida pela implementação do backend, integração de dados históricos e desenvolvimento das ferramentas analíticas.

### Progresso

- [x] Definição do escopo inicial do MVP
- [x] Planejamento da identidade visual
- [x] Desenvolvimento dos wireframes
- [ ] Finalização do frontend da Home
- [ ] Implementação da responsividade
- [ ] Estruturação do backend
- [ ] Modelagem do banco de dados
- [ ] Integração com fontes de dados da Fórmula 1
- [ ] Desenvolvimento do Race Explorer
- [ ] Desenvolvimento do Driver Comparison
- [ ] Testes e validações
- [ ] Deploy da primeira versão

---

## Objetivos

O F1 Intelligence busca oferecer uma plataforma centralizada para consulta e análise de informações históricas da Fórmula 1.

Seus principais objetivos são:

- Apresentar informações de campeonatos, pilotos e construtores.
- Disponibilizar calendários e resultados de corridas.
- Permitir a exploração de dados históricos de Grandes Prêmios.
- Comparar o desempenho de pilotos utilizando métricas estatísticas.
- Apresentar dados por meio de gráficos e visualizações interativas.
- Facilitar a compreensão de informações técnicas do automobilismo.
- Construir uma base escalável para funcionalidades futuras.

Além dos objetivos funcionais, o projeto também possui caráter educacional, envolvendo práticas de desenvolvimento frontend, backend, integração de APIs, modelagem de dados e arquitetura de software.

---

## Funcionalidades do MVP

O MVP será composto por três módulos principais.

### 1. Home — Dashboard da temporada

A Home será a página principal da plataforma, reunindo informações relevantes da temporada selecionada.

**Funcionalidades previstas:**

- Visão geral da temporada.
- Classificação do campeonato de pilotos.
- Classificação do campeonato de construtores.
- Informações da última corrida da temporada selecionada.
- Calendário de Grandes Prêmios.
- Resultados e estatísticas em destaque.
- Navegação para as ferramentas analíticas.
- Seleção de temporada.

A interface seguirá uma identidade visual esportiva, com destaque para fotografias, elementos gráficos e componentes informativos.

### 2. Race Explorer — Análise de corridas

O Race Explorer permitirá explorar informações detalhadas de corridas históricas.

**Funcionalidades previstas:**

- Seleção de temporada.
- Seleção de Grande Prêmio.
- Seleção de sessão.
- Consulta dos resultados da corrida.
- Visualização dos tempos de volta.
- Análise do ritmo dos pilotos.
- Gráficos de desempenho ao longo da corrida.
- Estatísticas de voltas e posições.

O módulo utilizará dados históricos obtidos de fontes externas e processados pelo backend da aplicação.

### 3. Driver Comparison — Comparação de pilotos

O Driver Comparison permitirá comparar o desempenho de dois pilotos em uma mesma corrida.

**Funcionalidades previstas:**

- Seleção de dois pilotos.
- Comparação dos tempos de volta.
- Comparação do ritmo médio.
- Comparação do ritmo mediano.
- Identificação da melhor volta.
- Análise da diferença de desempenho.
- Visualização de gráficos comparativos.

O objetivo é permitir comparações baseadas em métricas objetivas, considerando a disponibilidade e as limitações dos dados históricos.

---

## Tecnologias

O projeto utiliza uma arquitetura planejada para separar as responsabilidades de apresentação, processamento e persistência de dados.

### Frontend

Tecnologias utilizadas na implementação atual:

| Tecnologia | Finalidade |
|------------|------------|
| React | Construção da interface |
| TypeScript | Tipagem estática |
| Vite | Ambiente de desenvolvimento e build |
| CSS3 | Estilização e responsividade |
| Lucide React | Biblioteca de ícones |

### Backend

Tecnologias previstas para as próximas etapas:

| Tecnologia | Finalidade |
|------------|------------|
| Node.js | Ambiente de execução |
| TypeScript | Desenvolvimento tipado |
| Fastify | Construção da API REST |
| PostgreSQL | Persistência dos dados |

As tecnologias do backend poderão ser ajustadas conforme a evolução dos requisitos e as necessidades identificadas durante o desenvolvimento.

### Ferramentas

- Git
- GitHub
- Visual Studio Code
- Postman
- npm

---

## Fontes de dados

O F1 Intelligence utilizará fontes externas para obter informações históricas da Fórmula 1.

### OpenF1

API voltada para dados de sessões, pilotos, voltas, posições e outras informações relacionadas às corridas.

Documentação: https://openf1.org/

### Jolpica F1 API

API para consulta de informações históricas, incluindo calendários, resultados, classificações e dados de campeonatos.

Documentação: https://api.jolpi.ca/

### FastF1

Biblioteca Python voltada para obtenção e análise de dados históricos da Fórmula 1, incluindo informações de sessões e telemetria.

Documentação: https://docs.fastf1.dev/

**Observação:** essas fontes fazem parte do planejamento de integração. A utilização efetiva de cada uma dependerá da validação dos dados necessários, disponibilidade, limites de acesso e requisitos técnicos.

---

## Arquitetura planejada

A aplicação seguirá uma arquitetura com separação entre frontend, backend, persistência e fontes externas.

```text
                    F1 Intelligence
                           |
                    Frontend React
                           |
                      API REST
                           |
                 Backend Node.js
                           |
             +-------------+-------------+
             |                           |
         PostgreSQL                Integração de dados
                                         |
                              +----------+----------+
                              |          |          |
                            OpenF1     Jolpica     FastF1
```

### Frontend

Responsável pela apresentação das informações, interação com o usuário, navegação e visualização dos dados.

### Backend

Responsável por:

- Disponibilizar endpoints REST.
- Consultar e processar dados.
- Aplicar regras de negócio.
- Calcular estatísticas.
- Validar parâmetros.
- Tratar erros.
- Integrar informações de diferentes fontes.

### Banco de dados

O PostgreSQL será utilizado para armazenar dados estruturados e históricos relevantes para a aplicação.

Entre as entidades previstas estão:

- Temporadas
- Pilotos
- Equipes
- Circuitos
- Grandes Prêmios
- Sessões
- Resultados
- Tempos de volta

A modelagem definitiva será realizada durante a implementação do backend.

### Ingestão de dados

Está prevista a implementação de um processo para importar, transformar, validar e persistir dados históricos.

Esse processo permitirá reduzir consultas repetidas às fontes externas e padronizar as informações consumidas pelo frontend.

---

## Estrutura do projeto

A organização definitiva será documentada conforme a implementação das diferentes camadas.

Uma possível estrutura futura é:

```text
F1Inteligencia/
|
|-- frontend/
|   |-- public/
|   |-- src/
|   |   |-- assets/
|   |   |-- components/
|   |   |-- pages/
|   |   |-- services/
|   |   |-- styles/
|   |   |-- types/
|   |   `-- utils/
|   `-- package.json
|
|-- backend/
|   |-- src/
|   |   |-- modules/
|   |   |-- routes/
|   |   |-- services/
|   |   |-- repositories/
|   |   `-- config/
|   `-- package.json
|
|-- README.md
`-- .gitignore
```

**Importante:** essa estrutura representa uma proposta de organização futura e não necessariamente a estrutura atual do repositório.

---

## Instalação e execução

### Pré-requisitos

Para executar o frontend localmente, é necessário ter instalado:

- Node.js em uma versão compatível com o projeto.
- npm.
- Git.

### 1. Clonar o repositório

```bash
git clone https://github.com/Samuelftc/F1Inteligencia.git
```

### 2. Acessar o diretório

```bash
cd F1Inteligencia
```

### 3. Instalar as dependências

Execute o comando no diretório que contém o `package.json` do frontend:

```bash
npm install
```

### 4. Iniciar o ambiente de desenvolvimento

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local em que a aplicação estará disponível.

Normalmente, o endereço padrão é:

```text
http://localhost:5173
```

### 5. Gerar a versão de produção

```bash
npm run build
```

As instruções de execução do backend serão adicionadas após sua implementação.

---

## API REST

A API será desenvolvida durante a etapa de backend.

A estrutura inicial poderá seguir endpoints organizados por temporada, corrida e piloto.

### Exemplos de endpoints planejados

```http
GET /api/seasons
GET /api/seasons/:year
GET /api/seasons/:year/drivers
GET /api/seasons/:year/constructors
GET /api/seasons/:year/standings
GET /api/seasons/:year/races

GET /api/races/:raceId
GET /api/races/:raceId/results
GET /api/races/:raceId/laps

GET /api/races/:raceId/drivers/:driverId/laps
```

Esses endpoints são propostas de contrato e poderão ser modificados conforme a modelagem e os requisitos funcionais.

---

## Temporadas

A temporada inicial do MVP será **2025**.

A plataforma será desenvolvida para permitir a inclusão de temporadas adicionais sem alterações significativas na estrutura principal.

Temporadas previstas para expansão:

- 2024
- 2026
- Outras temporadas históricas compatíveis com as fontes utilizadas

A disponibilidade de determinadas métricas poderá variar de acordo com a temporada e a fonte consultada.

---

## Responsividade

A interface será desenvolvida com abordagem desktop-first, considerando o uso de tabelas, gráficos e componentes analíticos.

O projeto deverá oferecer suporte aos seguintes dispositivos:

| Dispositivo | Resolução de referência |
|-------------|-------------------------|
| Desktop | 1920 × 1080 |
| Notebook | 1366 × 768 |
| Notebook | 1440 × 900 |
| Tablet | 768 × 1024 |
| Smartphone | 390 × 844 |
| Smartphone | 360 × 800 |

As resoluções são referências de teste, não limitações fixas da interface.

Os componentes serão adaptados conforme o espaço disponível, priorizando legibilidade, acessibilidade e usabilidade.

---

## Roadmap

### Fase 1 — Interface da Home

- [x] Definição da identidade visual
- [x] Planejamento dos wireframes
- [x] Configuração inicial do projeto
- [ ] Implementação completa da Home
- [ ] Responsividade para notebooks
- [ ] Responsividade para tablets
- [ ] Responsividade para smartphones
- [ ] Revisão técnica do frontend

### Fase 2 — Backend e integração de dados

- [ ] Configuração do ambiente Node.js
- [ ] Estruturação da API com Fastify
- [ ] Modelagem do banco PostgreSQL
- [ ] Integração com fontes externas
- [ ] Implementação da ingestão de dados históricos
- [ ] Criação dos endpoints necessários para a Home
- [ ] Integração do frontend com a API
- [ ] Substituição dos dados mockados

### Fase 3 — Race Explorer

- [ ] Desenvolvimento da interface
- [ ] Seleção de corridas e sessões
- [ ] Consulta de resultados
- [ ] Processamento dos tempos de volta
- [ ] Implementação dos gráficos
- [ ] Integração com o backend

### Fase 4 — Driver Comparison

- [ ] Desenvolvimento da interface
- [ ] Seleção dos pilotos
- [ ] Implementação das métricas comparativas
- [ ] Cálculo de ritmo médio e mediano
- [ ] Implementação dos gráficos comparativos
- [ ] Integração com o backend

### Fase 5 — Finalização do MVP

- [ ] Testes funcionais
- [ ] Validação dos cálculos estatísticos
- [ ] Tratamento de erros
- [ ] Revisão de responsividade
- [ ] Otimizações de desempenho
- [ ] Documentação da API
- [ ] Deploy do frontend
- [ ] Deploy do backend
- [ ] Publicação da primeira versão

---

## Critérios de conclusão do MVP

O MVP será considerado concluído quando:

1. A Home apresentar informações reais e consistentes da temporada 2025.
2. O usuário conseguir consultar a classificação de pilotos e construtores.
3. O calendário e os resultados das corridas estiverem disponíveis.
4. O Race Explorer permitir explorar dados históricos de corridas.
5. O Driver Comparison permitir comparar dois pilotos utilizando métricas estatísticas.
6. O frontend estiver integrado ao backend.
7. A aplicação funcionar adequadamente nos principais tamanhos de tela.
8. Os dados exibidos forem validados.
9. A aplicação estiver publicada e acessível.
10. O repositório possuir documentação suficiente para instalação e execução.

---

## Funcionalidades futuras

Após a conclusão do MVP, poderão ser desenvolvidas funcionalidades adicionais.

### Strategy Lab

Ferramentas para análise de estratégias de corrida, incluindo paradas nos boxes, compostos de pneus e evolução de desempenho.

### Telemetry Lab

Visualização de dados de telemetria, como velocidade, aceleração, frenagem e outros parâmetros disponíveis.

### Live Race Center

Acompanhamento de sessões em andamento, condicionado à disponibilidade e às condições de acesso aos dados em tempo real.

### Análises avançadas

Possíveis expansões incluem:

- Comparações entre temporadas.
- Estatísticas históricas de pilotos e equipes.
- Análise de consistência.
- Evolução de desempenho.
- Visualizações estatísticas avançadas.

Essas funcionalidades não fazem parte do escopo inicial do MVP.

---

## Qualidade e boas práticas

O desenvolvimento buscará seguir princípios de organização, manutenção e confiabilidade.

Entre as práticas previstas estão:

- Componentização e reutilização de código.
- Tipagem estática com TypeScript.
- Separação de responsabilidades.
- Padronização de nomenclatura.
- Validação de dados externos.
- Tratamento de erros.
- Organização das regras de negócio.
- Versionamento com Git.
- Commits descritivos.
- Documentação progressiva.
- Testes de funcionalidades e cálculos estatísticos.

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
