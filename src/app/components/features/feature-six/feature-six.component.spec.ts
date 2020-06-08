import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSixComponent } from './feature-six.component';

describe('FeatureSixComponent', () => {
  let component: FeatureSixComponent;
  let fixture: ComponentFixture<FeatureSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
