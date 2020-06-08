import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverFiveComponent } from './discover-five.component';

describe('DiscoverFiveComponent', () => {
  let component: DiscoverFiveComponent;
  let fixture: ComponentFixture<DiscoverFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
