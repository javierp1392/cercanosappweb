import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeOneComponent } from './welcome-one.component';

describe('WelcomeOneComponent', () => {
  let component: WelcomeOneComponent;
  let fixture: ComponentFixture<WelcomeOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
