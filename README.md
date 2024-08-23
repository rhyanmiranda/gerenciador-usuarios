# API CRUD de Usuários

Esta é uma API para gerenciar usuários utilizando Node.js com Express, Sequelize, Sequelize CLI, SQLite3, e Nodemon. A arquitetura segue o padrão MVC (Model-View-Controller) com a adição de uma camada de services. Também aplicamos o conceito de orientação a objetos para criar classes base para controllers e services que contêm todos os métodos CRUD.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework web para Node.js.
- **Sequelize**: ORM para Node.js.
- **Sequelize CLI**: Interface de linha de comando para Sequelize.
- **SQLite3**: Banco de dados relacional leve.
- **Nodemon**: Ferramenta para reiniciar automaticamente o servidor Node.js.

## Arquitetura do Projeto

O projeto segue a arquitetura MVC

## Endpoints da API

### 1. Buscar Todos os Registros

- **Rota**: `/users`
- **Método HTTP**: `GET`
- **Descrição**: Retorna todos os usuários.
- **Resposta**: 
  - `200 OK`: Uma lista de usuários.

### 2. Buscar Registro por ID

- **Rota**: `/users/:id`
- **Método HTTP**: `GET`
- **Descrição**: Retorna um usuário específico por ID.
- **Parâmetros**: 
  - `id` (URL param): ID do usuário.
- **Resposta**: 
  - `200 OK`: Detalhes do usuário.
  - `404 Not Found`: Usuário não encontrado.
### 3. Criar Novo Registro

- **Rota**: `/users`
- **Método HTTP**: `POST`
- **Descrição**: Cria um novo usuário.
- **Corpo da Requisição**: 
  - JSON com os dados do usuário (e.g., `name`, `email`, etc.).
- **Resposta**: 
  - `201 Created`: Usuário criado com sucesso.
### 4. Alterar Registro pelo ID

- **Rota**: `/users/:id`
- **Método HTTP**: `PUT`
- **Descrição**: Atualiza um usuário existente por ID.
- **Parâmetros**: 
  - `id` (URL param): ID do usuário.
- **Corpo da Requisição**: 
  - JSON com os dados atualizados do usuário.
- **Resposta**: 
  - `200 OK`: Usuário atualizado com sucesso.
  - `404 Not Found`: Usuário não encontrado.

### 5. Deletar Registro pelo ID

- **Rota**: `/users/:id`
- **Método HTTP**: `DELETE`
- **Descrição**: Deleta um usuário por ID.
- **Parâmetros**: 
  - `id` (URL param): ID do usuário.
- **Resposta**: 
  - `200 OK`: eletado com sucesso.
  - `404 Not Found`: Usuário não encontrado.

## Instalação e Execução

1. **Clone o repositório**:

   ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
2. **Instale as dependencies**:
   ```bash
    npm install
3. **Configuração do banco de dados**:
    - Certifique-se de que o arquivo config/config.json está configurado corretamente para usar o SQLite3.

4. **Execute as migrações do banco de dados**:
   ```bash
    npx sequelize-cli db:migrate
5. **Inicie o servidor**:
   ```bash	
    npm run dev
O servidor será iniciado com Nodemon e estará disponível em `http://localhost:3333`

## Estrutura de Arquivos e Código
1. **Models**
  - `models/user.js`: Define o modelo do usuário utilizando Sequelize.
  - `models/index.js`: Inicializa os modelos e as associações.
2. **Controllers**
  - `controllers/Controller.js`: Classe mãe para os controllers contendo métodos CRUD comuns.
  - `controllers/UserController.js`: Extende Controller para implementar a lógica específica para usuários.
3. **Services**
  - `services/Services.js`: Classe mãe para os services contendo métodos CRUD comuns.
  - `services/UserServices.js`: Extende Services para implementar a lógica de negócio específica para usuários.
4. **Routes**
  - `routes/userRoutes.js`: Define as rotas para operações CRUD de usuários.
  - `routes/index.js`: ponto de entrada para todas as rotas, passada como middleware para o app.js
5. **app.js**
  - Arquivo que recebe os dados de toda aplicação além de ser passado como parâmetro para as rotas
6. **server.js**
  - Arquivo principal que inicializa o servidor
