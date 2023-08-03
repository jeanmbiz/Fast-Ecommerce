# Fast Ecommerce

A proposta da API Fast Ecommerce, é ser uma API simplificada no uso mas com funções completas para seu Ecommerce. Com ela você pode cadastrar seus produtos, separados por categorias, e ter um controle dos pedidos dos usuários.

Para os usuários, é possível conferir todos os produtos, criar uma conta e realizar pedidos.

A versão 1.0 ainda não conta com uma plataforma de pagamento, mas será implementada futuramente.

A API também pode ser útil para estudantes de Front-end que buscam criar um portifólio, precisam de uma API mas ainda não tem conhecimento de Back-end para criar uma API própria.

## Conteúdos

- [Fast Ecommerce](#fast-ecommerce)
  - [Conteúdos](#conteúdos)
  - [1. Instalação](#1-instalação)
    - [Para executar o projeto localmente, siga as etapas abaixo:](#para-executar-o-projeto-localmente-siga-as-etapas-abaixo)
      - [1.1 Clone o repositório:](#11-clone-o-repositório)
      - [1.2 Acesse o diretório do projeto:](#12-acesse-o-diretório-do-projeto)
      - [1.3 Instale as dependências do projeto:](#13-instale-as-dependências-do-projeto)
      - [1.4 Configure o banco de dados criando arquivo .env com base no arquivo .env.example:](#14-configure-o-banco-de-dados-criando-arquivo-env-com-base-no-arquivo-envexample)
      - [1.5 Gerar Migrations:](#15-gerar-migrations)
      - [1.6 Persistir Migrations:](#16-persistir-migrations)
      - [1.7 Rode o Projeto no Servidor Local:](#17-rode-o-projeto-no-servidor-local)
      - [1.8 Acesse o servidor local em seu navegador:](#18-acesse-o-servidor-local-em-seu-navegador)
  - [2. Funcionalidades](#2-funcionalidades)
  - [3. Tecnologias](#3-tecnologias)
  - [4. Documentação](#4-documentação)
  - [5. Diagrama](#5-diagrama)

## 1. Instalação

### Para executar o projeto localmente, siga as etapas abaixo:


#### 1.1 Clone o repositório:
```
git clone git@github.com:jeanmbiz/Fast-Ecommerce.git
```


#### 1.2 Acesse o diretório do projeto: 


#### 1.3 Instale as dependências do projeto:
```
yarn
```


#### 1.4 Configure o banco de dados criando arquivo .env com base no arquivo .env.example:


#### 1.5 Gerar Migrations:
```
yarn typeorm migration:generate -d src/data-source src/migrations/createTables
```


#### 1.6 Persistir Migrations:
```
yarn typeorm migration:run -d src/data-source
```


#### 1.7 Rode o Projeto no Servidor Local:
```
yarn dev
```


#### 1.8 Acesse o servidor local em seu navegador:
```
http://localhost:3000/
```


## 2. Funcionalidades

- Cadastro e login de usuários.
- Usuário administrador.
- Criação de categoria e produto.
- Controle de estoque.
- Carrinho de compra.
- Listar produtos por categoria.
- Listar todos os produtos.

## 3. Tecnologias

Foram utilizadas no projeto as seguintes tecnologias:

- NodeJS
- Express
- TypeScript
- PostgreSQL
- TypeORM
- Jest
- Yup
- Bcrypt
- JsonWebToken

## 4. Documentação

Link para a documentação do projeto: https://jeanmbiz.github.io/doc-api-ecommerce/


## 5. Diagrama
![diagrama](https://user-images.githubusercontent.com/71359547/213918096-9ed46621-70f6-4afa-819b-34ae76d368e4.PNG)


[Voltar ao topo](#fast-ecommerce)


