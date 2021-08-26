import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerContentComponent } from './controller-content.component';

describe('ControllercontentComponent', () => {
  let component: ControllerContentComponent;
  let fixture: ComponentFixture<ControllerContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControllerContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
