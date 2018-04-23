import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroStyleguideComponent } from './astro-styleguide.component';

describe('AstroStyleguideComponent', () => {
  let component: AstroStyleguideComponent;
  let fixture: ComponentFixture<AstroStyleguideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstroStyleguideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstroStyleguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
