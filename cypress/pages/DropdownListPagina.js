/// <reference types="Cypress"/>

class DropdownListPagina {
    visit() {
        cy.visit('https://the-internet.herokuapp.com/dropdown');
    }

    get getDropdown() {
        return cy.get('#dropdown');
    }

    get getDropdownOption(){
        return cy.get('#dropdown option')
    }

    selectOption(num) {
        this.getDropdown.select(num);
    }

    verifySelectedOption(num) {
        this.getDropdown.should('have.value', num)
    }
}

export default new DropdownListPagina();