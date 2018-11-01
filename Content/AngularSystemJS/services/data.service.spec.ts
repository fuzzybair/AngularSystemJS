import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

// Services
import { DataService } from '../services/data.service';


describe('Service: DataService', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DataService
      ]
    }).compileComponents();
  }));

  it('should be defined', () => {
    let dataService = TestBed.get(DataService);
    expect(dataService).toBeDefined();
  });
});
