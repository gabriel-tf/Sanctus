import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaintPage } from './saint.page';

describe('SaintPage', () => {
  let component: SaintPage;
  let fixture: ComponentFixture<SaintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaintPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
