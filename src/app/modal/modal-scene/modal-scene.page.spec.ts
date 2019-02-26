import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalScenePage } from './modal-scene.page';

describe('ModalScenePage', () => {
  let component: ModalScenePage;
  let fixture: ComponentFixture<ModalScenePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalScenePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalScenePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
