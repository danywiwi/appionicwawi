import { browser, by, element } from 'protractor';
import { expect } from 'chai';

describe('Formularios Enfermera Page', () => {
    beforeEach(async () => {
      await browser.get('/formulariosenfermera');
    });
  
    it('should display the correct title', async () => {
      const title = await element(by.css('ion-title')).getText();
      expect(title).to.equal('DartyApp - Formularios Enfermera'); // Aserción de Chai
    });
  
    it('should display correct card titles', async () => {
      const cardTitles = await element.all(by.css('ion-card-title')).getText();
      expect(cardTitles).to.deep.equal(['Registros Diariosʕっ•ᴥ•ʔっ', 'Proceso de Descontaminación']); // Aserción de Chai para arrays
    });
  
    it('should have correct options for temperatura select', async () => {
      const options = await element(by.name('temperatura')).all(by.tagName('ion-select-option')).getText();
      expect(options).to.have.lengthOf(49); // Aserción de Chai
    });
  
    it('should have correct options for humedad select', async () => {
      const options = await element(by.name('humedad')).all(by.tagName('ion-select-option')).getText();
      expect(options).to.have.lengthOf(70); // Aserción de Chai
    });
  
    it('should show alert with correct information when Mostrar is clicked', async () => {
      await element(by.name('temperatura')).click();
      await element.all(by.cssContainingText('ion-select-option', '25')).click();
  
      await element(by.name('humedad')).click();
      await element.all(by.cssContainingText('ion-select-option', '50')).click();
  
      await element(by.buttonText('Mostrar')).click();
  
      const alert = await browser.switchTo().alert();
      const alertText = await alert.getText();
      expect(alertText).to.contain('Temperatura: 25 °C'); // Aserción de Chai
      expect(alertText).to.contain('Humedad: 50%'); // Aserción de Chai
      await alert.accept();
    });
  
    it('should clear fields when Limpiar is clicked', async () => {
      await element(by.name('temperatura')).click();
      await element.all(by.cssContainingText('ion-select-option', '25')).click();
  
      await element(by.buttonText('Limpiar')).click();
  
      const temperatura = await element(by.name('temperatura')).getText();
      expect(temperatura).to.equal(''); // Aserción de Chai
    });
  
    it('Visits the initial project page', () => {
      cy.visit('/');
      cy.contains('app is running', { timeout: 10000 }); // Aumenta el tiempo de espera a 10 segundos
    });
  });
  