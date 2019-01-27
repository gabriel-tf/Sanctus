import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoorPage } from './poor.page';

describe('PoorPage', () => {
  let component: PoorPage;
  let fixture: ComponentFixture<PoorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
