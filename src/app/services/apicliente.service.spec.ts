import { TestBed } from '@angular/core/testing';
import { ApiclienteService } from './apicliente.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApiclienteService', () => {
  let service: ApiclienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiclienteService]
    });
    service = TestBed.inject(ApiclienteService);
  });

  it('should be created', () => {
    expect(service).to.be.ok; 
  });
});
