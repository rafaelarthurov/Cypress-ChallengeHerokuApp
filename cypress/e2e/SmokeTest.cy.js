/// <reference types="Cypress"/>

import SesionPagina from '../pages/SesionPagina';
import InputsPagina from '../pages/InputsPagina';
import HoversPagina from '../pages/HoverPagina';
import DropdownPage from '../pages/DropdownListPagina';

describe('Smoke Test -Herokuapp ', () => {

    it('Smoke test SesionPagina', () => {

        SesionPagina.visit()
        SesionPagina.usernameInput.should('be.visible')
        SesionPagina.passwordInput.should('be.visible')
        SesionPagina.loginButton.should('be.visible').and('be.enabled')
    })

    it('Smoke test InputsPagina', () => {

        InputsPagina.visit()
        InputsPagina.getField.should('be.visible')
        InputsPagina.getField.should('be.enabled')
    })

    it('Smoke test HoversPage', () => {

        HoversPagina.visit()
        HoversPagina.getHoverField.eq(0).should('be.visible')
        HoversPagina.getHoverField.eq(1).should('be.visible')
        HoversPagina.getHoverField.eq(2).should('be.visible')
    })

    it('Smoke test DropdownPage', () => {

        DropdownPage.visit()
        DropdownPage.getDropdown.should('be.visible')
        DropdownPage.getDropdownOption.should('have.length', 3)
        DropdownPage.getDropdownOption.eq(1).should('have.text', 'Option 1')
    })
})
