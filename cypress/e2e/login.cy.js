describe('Teste de Login', () => {
  it('Deve acessar a página de logins', () => {
    cy.visit('/login.html'); // Usando baseUrl configurado, só precisa do caminho relativo
    cy.get('h1').should('contain', 'Login');
  });
});