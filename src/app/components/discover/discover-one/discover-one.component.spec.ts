import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverOneComponent } from './discover-one.component';

describe('DiscoverOneComponent', () => {
  let component: DiscoverOneComponent;
  let fixture: ComponentFixture<DiscoverOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
