import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasMapSelectorComponent } from './areas-map-selector.component';

describe('AreasMapSelectorComponent', () => {
  let component: AreasMapSelectorComponent;
  let fixture: ComponentFixture<AreasMapSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreasMapSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasMapSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
