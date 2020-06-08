import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeThreeComponent } from './welcome-three.component';

describe('WelcomeThreeComponent', () => {
  let component: WelcomeThreeComponent;
  let fixture: ComponentFixture<WelcomeThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
