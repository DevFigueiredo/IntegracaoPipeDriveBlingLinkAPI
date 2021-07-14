# Teste Técnico - LinkAPI

## Descrição do Projeto
<p align="center">Projeto de integração entre duas plataformas, PipeDrive e Bling</p>


### Requisitos

[X] Criar contas testes nas plataformas Pipedrive e Bling.

[X] Criar uma integração entre as plataformas Pipedrive e Bling( A integração deve buscar as oportunidades com status igual a ganho no Pipedrive, depois inseri-las como pedido no Bling ).

[X] Criar banco de dados mongo, existem serviços como MongoDB Atlas para criar de graça

[X] Criar uma collection no banco de dados MongoDB agregando as oportunidades inseridas no Bling por dia e valor total.

[X] Criar endpoint para trazer os dados consolidados da collection do MongoDB.


### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)


### Clone este repositório
$ git clone <https://github.com/DevFigueiredo/IntegracaoPipeDriveBlingLinkAPI>

### Acesse a pasta do projeto no terminal/cmd
$ cd IntegracaoPipeDriveBlingLinkAPI

### Instale as dependências
$ yarn install

### Execute a aplicação em modo de desenvolvimento
$ yarn dev

### O servidor iniciará na porta:3333 - acesse <http://localhost:3333> 


### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/pt-br)
- [Mongoose](https://mongoosejs.com/)
- [ExpressJS](https://expressjs.com/)
- [Swagger](https://swagger.io/)


### Endpoints do Projeto 
Foram criados dois endpoints, sendo um que realiza a importação dos dados do PipeDrive para o Bling, integrando os bancos, e o outro endpoint busca todos os pedidos integrados entre as plataformas.
POST - http://localhost:3333/order - Integra os bancos de dados
GET - http://localhost:3333/order - Busca os dados integrados

Indico utilizar o Insomnia ou Postman para realizar o envio das requisições.

