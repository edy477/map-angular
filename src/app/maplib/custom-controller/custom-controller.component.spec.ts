import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomControllerComponent } from './custom-controller.component';

describe('CustomcontrollersComponent', () => {
  let component: CustomControllerComponent;
  let fixture: ComponentFixture<CustomControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
