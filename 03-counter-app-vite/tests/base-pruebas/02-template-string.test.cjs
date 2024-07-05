import { getSaludo } from '../../src/base-pruebas/02-template-string.js';


describe('Pruebas en 02-template-string', () => { 

    test( 'getSaludo debe retornar "Hola Jonhatan"', () => {

        const name = 'Jonhatan';
        const messaje = getSaludo( name );

        expect ( messaje ).toBe( 'Hola ${ name }' );

    });

});