import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedfilterComponent } from './selectedfilter.component';

describe('SelectedfilterComponent', () => {
  let component: SelectedfilterComponent;
  let fixture: ComponentFixture<SelectedfilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedfilterComponent]
    });
    fixture = TestBed.createComponent(SelectedfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
