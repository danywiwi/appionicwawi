import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, IonicModule.forRoot()],
      declarations: [HomePage]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
