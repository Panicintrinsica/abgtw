import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsWeatherComponent } from './us-weather.component';

describe('UsWeatherComponent', () => {
  let component: UsWeatherComponent;
  let fixture: ComponentFixture<UsWeatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsWeatherComponent]
    });
    fixture = TestBed.createComponent(UsWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
