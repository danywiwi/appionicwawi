import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormulariosenfermeraPage } from './formulariosenfermera.page';

describe('FormulariosenfermeraPage', () => {
  let component: FormulariosenfermeraPage;
  let fixture: ComponentFixture<FormulariosenfermeraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariosenfermeraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
