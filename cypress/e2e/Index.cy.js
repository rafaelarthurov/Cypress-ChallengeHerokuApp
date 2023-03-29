/// <reference types="Cypress"/>

import SesionPagina from '../pages/SesionPagina';
import InputsPagina from '../pages/InputsPagina';
import HoversPagina from '../pages/HoverPagina';
import DropdownPagina from '../pages/DropdownListPagina';

describe('Test Suite - herokuapp.com', () => {


    it('Probando las credenciales en el login', () => {
        cy.fixture('example').then((example) => {
            SesionPagina.visit();
            /*
            El foreach anidado utiliza todos los pass por cada usuario
            */
            example.loginUser[0].Users.forEach((user) => {
                example.loginPass[0].Pass.forEach((pass) => {
                    SesionPagina.login(user, pass);
                })
            })
        })
    });

    it('Probando introducir un numero y validarlo', () => {
        cy.fixture('example').then((example) => {
            InputsPagina.visit();
            example.InputId[0].IDs.forEach((id) => {
                InputsPagina.input(id);
                InputsPagina.verify(id);
            })
        });
    });

    it('Haciendo over encima de los elementos y validando el link', () => {
        cy.fixture('example').then((example) => {
            HoversPagina.visit();
            example.HoverId[0].IDs.forEach((id) => {
                HoversPagina.hoverOverAvatar(id);
                HoversPagina.verifyProfileLinkIsVisible(id);
            })
        })
    });

    it('Probando las diferentes opciones del dropdown list', () => {
        cy.fixture('example').then((example) => {
            DropdownPagina.visit();
            example.DropdownIDs[0].IDs.forEach((id) => {
                DropdownPagina.selectOption(id);
                DropdownPagina.verifySelectedOption(id);
            })
           
        })
    });
});