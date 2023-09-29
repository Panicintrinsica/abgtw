import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsCampingComponent } from './us-camping.component';

describe('UsCampingComponent', () => {
  let component: UsCampingComponent;
  let fixture: ComponentFixture<UsCampingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsCampingComponent]
    });
    fixture = TestBed.createComponent(UsCampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
