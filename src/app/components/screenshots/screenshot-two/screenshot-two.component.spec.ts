import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenshotTwoComponent } from './screenshot-two.component';

describe('ScreenshotTwoComponent', () => {
  let component: ScreenshotTwoComponent;
  let fixture: ComponentFixture<ScreenshotTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenshotTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenshotTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
