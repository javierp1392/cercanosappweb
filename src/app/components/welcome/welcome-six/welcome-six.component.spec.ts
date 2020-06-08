import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeSixComponent } from './welcome-six.component';

describe('WelcomeSixComponent', () => {
  let component: WelcomeSixComponent;
  let fixture: ComponentFixture<WelcomeSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
