# Tabela de Funcionários 

### Descrição

Este projeto consiste em uma aplicação web que exibe uma tabela com dados de funcionários, incluindo **Foto**, **Nome**, **Cargo**, **Data de Admissão** e **Telefone**.O projeto simula uma API de funcionários usando **JSON Server** para fornecer dados e uma interface desenvolvida com React. O usuário pode pesquisar e filtrar os funcionários pelo **nome**, **cargo** e **telefone**. A interface é responsiva, garantindo uma boa experiência de uso em dispositivos móveis e desktop, com data e telefone formatados.

## Tecnologias

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **React**
- **JavaScript**
- **Yarn** (gerenciador de pacotes)
- **Axios** (biblioteca para fazer requisições HTTP)
- **CSS** (estilos para a interface, com um arquivo styles.css importado)
- **JSON Server** (para simulação de uma API RESTful local)
- **Git** (controle de versão)

### Pré-requisitos

Certifique-se de ter os seguintes programas instalados em sua máquina antes de rodar o projeto:

- **Node.js**
- **Yarn**
- **Git**
- **JSON Server**

### Instruções de Instalação

Siga os passos abaixo para rodar a aplicação localmente:

#### 1. Clone o repositório:

[https://github.com/viniciusfernandes08/teste-front-end]

#### 3. Instale as dependências com Yarn:
No terminal, execute o comando:

`yarn install`

#### 4. Instale o JSON Server:
O JSON Server será utilizado para simular uma API RESTful local. Execute o comando abaixo para adicioná-lo ao projeto:

`yarn add json-server`

####  5. Rodar a API localmente com o JSON Server:
Após a instalação do JSON Server, execute o seguinte comando para iniciar a API:

`yarn json-server --watch db.json`

 **Atenção:** Mantenha o JSON Server rodando no terminal para que os dados da API sejam carregados e visualizados corretamente no projeto.

#### 6. Rodar a aplicação React:
Execute o seguinte comando para rodar o projeto React

`yarn dev`

Caso o comando acima não funcione, utilize:

`yarn start`

#### 7. Acesse a aplicação: 
Após rodar os dois servidores (API e React), a aplicação React estará acessível em http://localhost:5173 e estará consumindo dados da API simulada rodando em http://localhost:3000.

### Funcionalidades:

- **Visualização da tabela:** A tabela mostra uma lista de funcionários com informações como foto, nome, cargo, data de admissão e telefone.

- **Busca e Filtro:** Utilize o campo de pesquisa para buscar funcionários por nome, cargo ou telefone.

 **Atenção:**
   - Na busca por **cargo** você deve usar o traço(-) em caso de cargos compostos, exemplo("Back-end") 
   - Na busca por **telefone**, digite o código do país, o DDD do estado e os 9 dígitos, **sem espaços**, **traços** ou **parênteses**.

- **Responsividade:** A aplicação é responsiva, adaptando-se dispositivos móveis com no máximo 375px de largura.

### Detalhes adicionais

O projeto foi desenvolvido seguindo as boas práticas do React, utilizando a organização por **componentes** como o **Card** e **Header**, por **páginas** como Home(nesse caso, uma única página Home), **services**(que gerencia a api e faz as requisições HTTP com **Axios**) e **utils**(que armazenam as funções de formatação de data e telefone).

A estilização foi feita com um arquivo styles.css, que está no mesmo diretório dos arquivos **JSX**.