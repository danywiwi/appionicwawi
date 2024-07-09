import { browser, by, element } from 'protractor';

describe('Formularios Enfermera Page', () => {
  beforeEach(async () => {
    await browser.get('/formulariosenfermera');
  });

  it('should display the correct title', async () => {
    const title = await element(by.css('ion-title')).getText();
    expect(title).toEqual('DartyApp - Formularios Enfermera');
  });

  it('should display correct card titles', async () => {
    const cardTitles = await element.all(by.css('ion-card-title')).getText();
    expect(cardTitles).toEqual(['Registros Diariosʕっ•ᴥ•ʔっ', 'Proceso de Descontaminación']);
  });

  it('should have correct options for temperatura select', async () => {
    const options = await element(by.name('temperatura')).all(by.tagName('ion-select-option')).getText();
    expect(options.length).toBe(49); // As there are 49 options from 0 to 48
  });

  it('should have correct options for humedad select', async () => {
    const options = await element(by.name('humedad')).all(by.tagName('ion-select-option')).getText();
    expect(options.length).toBe(70); // As there are 70 options from 0 to 69
  });

  it('should show alert with correct information when Mostrar is clicked', async () => {
    await element(by.name('temperatura')).click();
    await element.all(by.cssContainingText('ion-select-option', '25')).click();

    await element(by.name('humedad')).click();
    await element.all(by.cssContainingText('ion-select-option', '50')).click();

    await element(by.buttonText('Mostrar')).click();

    const alert = await browser.switchTo().alert();
    const alertText = await alert.getText();
    expect(alertText).toContain('Temperatura: 25 °C');
    expect(alertText).toContain('Humedad: 50%');
    await alert.accept();
  });

  it('should clear fields when Limpiar is clicked', async () => {
    await element(by.name('temperatura')).click();
    await element.all(by.cssContainingText('ion-select-option', '25')).click();

    await element(by.buttonText('Limpiar')).click();

    const temperatura = await element(by.name('temperatura')).getText();
    expect(temperatura).toEqual('');
  });
});