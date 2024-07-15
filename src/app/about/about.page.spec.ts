import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutPage } from './about.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { expect } from 'chai';
import * as sinon from 'sinon';

describe('AboutPage', () => {
  let component: AboutPage;
  let fixture: ComponentFixture<AboutPage>;

  // Mock de GoogleMap
  const mockAddMarker = sinon.stub().resolves();
  const mockGoogleMap = {
    create: sinon.stub().resolves({
      addMarker: mockAddMarker,
    }),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: GoogleMap, useValue: mockGoogleMap }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to.exist;
  });

  it('should create map on init', async () => {
    const createMapSpy = sinon.spy(component, 'createMap');
    component.ngOnInit();
    await fixture.whenStable(); // Espera a que las promesas se resuelvan
    expect(createMapSpy.called).to.be.true;
    expect(mockGoogleMap.create.called).to.be.true;
  });

  it('should add marker', async () => {
    await component.createMap();
    sinon.assert.calledWith(mockAddMarker, {
      coordinate: { lat: -38.731902, lng: -72.617411 },
      title: 'Ubicacion',
      snippet: 'Aquí está el marcador!',
    });
  });
});
