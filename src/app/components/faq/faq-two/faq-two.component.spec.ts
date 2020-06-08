import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqTwoComponent } from './faq-two.component';

describe('FaqTwoComponent', () => {
  let component: FaqTwoComponent;
  let fixture: ComponentFixture<FaqTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
