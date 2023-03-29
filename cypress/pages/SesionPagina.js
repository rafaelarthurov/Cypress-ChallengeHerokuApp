/// <reference types="Cypress"/>

class SesionPagina {
    visit() {
      cy.visit('https://the-internet.herokuapp.com/login');
    }
  
    get usernameInput() {
        return cy.get('#username');
    }
  
    get passwordInput() {
      return cy.get('#password');
    }
  
    get loginButton() {
      return cy.get('.radius');
    }
  
    login(username, password) {
      this.usernameInput.type(username);
      this.passwordInput.type(password);
      this.loginButton.click();
    }
  }
  
  export default new SesionPagina();
  