const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:5500', // endereço local do servidor
    setupNodeEvents(on, config) {
      // Você pode adicionar eventos de Node aqui se precisar
    },
  },
});
