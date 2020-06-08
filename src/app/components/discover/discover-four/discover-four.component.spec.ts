import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverFourComponent } from './discover-four.component';

describe('DiscoverFourComponent', () => {
  let component: DiscoverFourComponent;
  let fixture: ComponentFixture<DiscoverFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
