import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetSummaryComponent } from './planet-summary.component';

describe('PlanetSummaryComponent', () => {
  let component: PlanetSummaryComponent;
  let fixture: ComponentFixture<PlanetSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
