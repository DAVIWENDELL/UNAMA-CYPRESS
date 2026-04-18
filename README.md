# UNAMA-CYPRESS

Este repositório contém um projeto de aplicação web desenvolvido como trabalho para a faculdade, com foco na implementação de testes automatizados utilizando a ferramenta Cypress.

## Descrição do Projeto

O projeto consiste em uma aplicação web simples, provavelmente com funcionalidades de login e páginas estáticas (`index.html`). O principal objetivo deste repositório é demonstrar a integração e o uso do Cypress para a criação de testes end-to-end (E2E), garantindo a funcionalidade e a estabilidade da aplicação.

## Tecnologias Utilizadas

*   **HTML5:** Estrutura das páginas web.
*   **CSS3:** Estilização e layout da interface.
*   **JavaScript/Node.js:** Ambiente de desenvolvimento e execução.
*   **Cypress:** Framework de testes end-to-end para aplicações web.

## Como Configurar e Rodar o Projeto

Para configurar e executar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/DAVIWENDELL/UNAMA-CYPRESS.git
    cd UNAMA-CYPRESS
    ```
2.  **Instale as dependências:**
    Certifique-se de ter o Node.js e o npm (ou yarn) instalados.
    ```bash
    npm install
    # ou
    yarn install
    ```
3.  **Execute a aplicação (se houver um servidor de desenvolvimento):**
    Se o projeto incluir um script para iniciar um servidor local (verifique o `package.json` para scripts como `start`), execute-o:
    ```bash
    npm start
    # ou
    yarn start
    ```
    (Se não houver um script de `start`, as páginas HTML podem ser abertas diretamente no navegador para visualização, mas o Cypress precisará de um servidor para rodar os testes).

## Como Rodar os Testes Cypress

Para executar os testes automatizados com Cypress:

1.  **Abra o Cypress Test Runner:**
    ```bash
    npx cypress open
    ```
    Isso abrirá a interface gráfica do Cypress, onde você pode selecionar e executar os testes.

2.  **Execute os testes via linha de comando (headless):**
    ```bash
    npx cypress run
    ```
    Isso executará todos os testes em modo headless (sem interface gráfica) e gerará um relatório no terminal.
