import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingTwoComponent } from './pricing-two.component';

describe('PricingTwoComponent', () => {
  let component: PricingTwoComponent;
  let fixture: ComponentFixture<PricingTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
