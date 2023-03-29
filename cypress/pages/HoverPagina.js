/// <reference types="Cypress"/>

class HoverPagina {
    visit() {
        cy.visit('https://the-internet.herokuapp.com/hovers');
    }

    get getHoverField() {
        return cy.get('.figure');
    }

    hoverOverAvatar(num) {
        this.getHoverField.eq(num).trigger('mouseover');
    }
    verifyProfileLinkIsVisible(num) {
        this.getHoverField.eq(num).find('a').should('be.visible');
    }
}

export default new HoverPagina();