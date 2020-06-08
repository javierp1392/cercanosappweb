import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeTwoComponent } from './welcome-two.component';

describe('WelcomeTwoComponent', () => {
  let component: WelcomeTwoComponent;
  let fixture: ComponentFixture<WelcomeTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
