import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverSixComponent } from './discover-six.component';

describe('DiscoverSixComponent', () => {
  let component: DiscoverSixComponent;
  let fixture: ComponentFixture<DiscoverSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
