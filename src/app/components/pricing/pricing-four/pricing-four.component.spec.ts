import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingFourComponent } from './pricing-four.component';

describe('PricingFourComponent', () => {
  let component: PricingFourComponent;
  let fixture: ComponentFixture<PricingFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
