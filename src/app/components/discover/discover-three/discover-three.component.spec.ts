import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverThreeComponent } from './discover-three.component';

describe('DiscoverThreeComponent', () => {
  let component: DiscoverThreeComponent;
  let fixture: ComponentFixture<DiscoverThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
