import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureMarkerComponent } from './feature-marker.component';

describe('FeatureMarkerComponent', () => {
  let component: FeatureMarkerComponent;
  let fixture: ComponentFixture<FeatureMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureMarkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
