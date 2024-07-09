import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).to.be.ok; // Aserción de Chai equivalente a toBeTruthy
  });

  it('should have menu labels', () => {
    fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-label');

    expect(menuItems.length).to.equal(component.appPages.length); // Asegúrate de que el número de elementos sea correcto
  });

  it('should have urls', () => {
    fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-item');

    expect(menuItems.length).to.equal(component.appPages.length); // Asegúrate de que el número de elementos sea correcto

    component.appPages.forEach((page, index) => {
      expect(menuItems[index].getAttribute('ng-reflect-router-link')).to.equal(`${page.url}`); // Verifica que las URLs sean correctas
    });
  });
});
