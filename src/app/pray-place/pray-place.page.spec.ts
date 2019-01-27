import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayPlacePage } from './pray-place.page';

describe('PrayPlacePage', () => {
  let component: PrayPlacePage;
  let fixture: ComponentFixture<PrayPlacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayPlacePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayPlacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
