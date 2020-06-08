import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenshotOneComponent } from './screenshot-one.component';

describe('ScreenshotOneComponent', () => {
  let component: ScreenshotOneComponent;
  let fixture: ComponentFixture<ScreenshotOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenshotOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenshotOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
