import { async, fakeAsync, tick, TestBed } from '@angular/core/testing';

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
    let component = fixture.componentInstance;
    fixture.detectChanges();
    let element = fixture.debugElement.nativeElement;

    expect(element.querySelector('h1').testContent).toContain("Hello, Angular");
  });
});
