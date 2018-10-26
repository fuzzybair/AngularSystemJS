import { async, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

// Services
import { DataService } from '../services/data.service';


describe('Service: DataService', () => {

  beforeEach(async(() => {
    console.log('before DataService test');
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
    console.log('started DataService test');
    let dataService = TestBed.get(DataService);
    expect(dataService).toBeDefined();
    console.log('finished DataService test');
  });
});
