import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsVenueComponent } from './us-venue.component';

describe('UsVenueComponent', () => {
  let component: UsVenueComponent;
  let fixture: ComponentFixture<UsVenueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsVenueComponent]
    });
    fixture = TestBed.createComponent(UsVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
