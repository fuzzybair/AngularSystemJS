import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AngularSystemJSComponent } from './angular-systemjs.component';

describe('AngularSystemJSComponent', () => {
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [AngularSystemJSComponent],
      imports: [],
      providers: []
    }).compileComponents();
  }));

  it('should create', () => {
    let fixture = TestBed.createComponent(AngularSystemJSComponent);
    let component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have greeting Hello Angular', () => {
    let fixture = TestBed.createComponent(AngularSystemJSComponent);
    let component = fixture.componentInstance;
    expect(component.greeting()).toEqual("Hello, Angular");
  });

  it('should have greeting rendered in an h1', () => {
    let fixture = TestBed.createComponent(AngularSystemJSComponent);
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(element.textContent).toContain("Hello, Angular");
  });
});
