describe('FormulariosenfermeraPage e2e tests', () => {
    beforeEach(() => {
      cy.visit('/formulariosenfermera');
    });
  
    it('should redirect unauthorized user', () => {
      cy.window().then((win) => {
        win.localStorage.setItem('loggedInUser', 'NotDaniela');
      });
      cy.reload();
      cy.url().should('include', '/notfound');
    });
  
    it('should load bodega data', () => {
      cy.intercept('GET', '**/api/bodegas', {
        statusCode: 200,
        body: { data: [{ nombre: 'Bodega 1' }, { nombre: 'Bodega 2' }] }
      }).as('getBodegas');
      cy.reload();
      
      cy.wait('@getBodegas', { timeout: 10000 }).then((interception) => {
        console.log(interception);
        cy.get('ion-select[name="bodega"]').click();
        cy.contains('Bodega 1').should('exist');
        cy.contains('Bodega 2').should('exist');
      });
    });
  
    it('should have correct options for temperatura and humedad select', () => {
      cy.get('ion-select[name="temperatura"]', { timeout: 10000 }).should('be.visible').click({ force: true });
      for (let i = 0; i <= 48; i++) {
        cy.contains(i.toString()).should('exist');
      }
      cy.get('ion-backdrop').click(); // Close the select
      cy.get('ion-select[name="humedad"]', { timeout: 10000 }).should('be.visible').click({ force: true });
      for (let i = 0; i <= 69; i++) {
        cy.contains(i.toString()).should('exist');
      }
      cy.get('ion-backdrop').click(); // Close the select
    });
  
    it('should clear fields when Limpiar is clicked', () => {
      cy.get('ion-input[name="temperatura"]').type('25');
      cy.get('ion-input[name="humedad"]').type('50');
      cy.get('ion-button').contains('Limpiar').click();
      cy.get('ion-input[name="temperatura"]').should('have.value', '');
      cy.get('ion-input[name="humedad"]').should('have.value', '');
    });
  
    it('should show correct information when Mostrar is clicked', () => {
      cy.get('ion-select[name="temperatura"]').click();
      cy.contains('25').click();
      cy.get('ion-select[name="humedad"]').click();
      cy.contains('50').click();
      cy.get('ion-button').contains('Mostrar').click();
      cy.on('window:alert', (str) => {
        expect(str).to.contain('Temperatura: 25 °C');
        expect(str).to.contain('Humedad: 50%');
      });
    });
  });
  