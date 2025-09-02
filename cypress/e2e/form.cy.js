describe('Testes do Formulário de Cadastro', () => {

  // Teste 1: Carregamento da página
  it('Deve carregar a página de cadastro', () => {
    cy.visit('/index.html');
    cy.contains('Cadastro do Usuário'); // Confirma que a página carregou
  });

  // Teste 2: Preenchimento do formulário
 it('Deve preencher todos os campos do formulário', () => {
  cy.visit('/index.html');
  cy.get('#nome').type('João da Silva', { delay: 100 });
  cy.get('#email').type('joao@email.com', { delay: 100 });
  cy.get('#senha').type('123456', { delay: 100 });
  cy.get('#mensagem').type('Este é um teste automatizado.', { delay: 100 });
  });

  // Teste 3: Envio do formulário e verificação de mensagem de sucesso
  it('Deve enviar o formulário e exibir mensagem de sucesso', () => {
  cy.visit('/index.html');
 cy.get('#nome').type('Marias Oliveira', { delay: 100 }); // 100ms entre teclas
cy.get('#email').type('maria@email.com', { delay: 100 });
cy.get('#senha').type('654321', { delay: 100 });
cy.get('#mensagem').type('Outro teste com Cypress.', { delay: 100 });

  cy.get('#botao-enviar').click();

// Simula a mensagem aparecendo
cy.get('#mensagem-sucesso').invoke('show').should('be.visible');
});

});
