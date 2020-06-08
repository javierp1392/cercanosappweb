import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeFourComponent } from './welcome-four.component';

describe('WelcomeFourComponent', () => {
  let component: WelcomeFourComponent;
  let fixture: ComponentFixture<WelcomeFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
