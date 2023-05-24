import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubFiltersComponent } from './sub-filters.component';

describe('SubFiltersComponent', () => {
  let component: SubFiltersComponent;
  let fixture: ComponentFixture<SubFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubFiltersComponent]
    });
    fixture = TestBed.createComponent(SubFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
