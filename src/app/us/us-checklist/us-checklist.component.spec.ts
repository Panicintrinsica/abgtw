import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsChecklistComponent } from './us-checklist.component';

describe('UsChecklistComponent', () => {
  let component: UsChecklistComponent;
  let fixture: ComponentFixture<UsChecklistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsChecklistComponent]
    });
    fixture = TestBed.createComponent(UsChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
