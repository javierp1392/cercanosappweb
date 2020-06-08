import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewThreeComponent } from './review-three.component';

describe('ReviewThreeComponent', () => {
  let component: ReviewThreeComponent;
  let fixture: ComponentFixture<ReviewThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
