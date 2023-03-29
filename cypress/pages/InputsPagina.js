/// <reference types="Cypress"/>

class InputsPagina {
    visit() {
      cy.visit('https://the-internet.herokuapp.com/inputs')
    }
  
    get getField() {
      return cy.get('input')
    }

    input(num) {
      this.getField.type(num);
    }

    verify(num){
        this.getField.should('have.value', num);
        this.getField.clear();
    }
  }
  
  export default new InputsPagina();
