import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsLandingComponent } from './us-landing.component';

describe('UsLandingComponent', () => {
  let component: UsLandingComponent;
  let fixture: ComponentFixture<UsLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsLandingComponent]
    });
    fixture = TestBed.createComponent(UsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
