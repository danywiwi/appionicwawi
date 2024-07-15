import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormulariosenfermeraPage } from './formulariosenfermera.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ApiclienteService } from '../services/apicliente.service';  //

describe('FormulariosenfermeraPage', () => {
  let component: FormulariosenfermeraPage;
  let fixture: ComponentFixture<FormulariosenfermeraPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        IonicModule.forRoot(),
        FormsModule
      ],
      declarations: [FormulariosenfermeraPage],
      providers: [ApiclienteService]  //
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariosenfermeraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to.be.ok; // Aserción de Chai equivalente a toBeTruthy
  });
});
