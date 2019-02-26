import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenegraphComponent } from './scenegraph.component';

describe('ScenegraphComponent', () => {
  let component: ScenegraphComponent;
  let fixture: ComponentFixture<ScenegraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenegraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenegraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
