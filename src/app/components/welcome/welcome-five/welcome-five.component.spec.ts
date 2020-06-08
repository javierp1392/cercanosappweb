import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeFiveComponent } from './welcome-five.component';

describe('WelcomeFiveComponent', () => {
  let component: WelcomeFiveComponent;
  let fixture: ComponentFixture<WelcomeFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
