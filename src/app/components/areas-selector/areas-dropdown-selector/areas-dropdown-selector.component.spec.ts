import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasDropdownSelectorComponent } from './areas-dropdown-selector.component';

describe('AreasDropdownSelectorComponent', () => {
  let component: AreasDropdownSelectorComponent;
  let fixture: ComponentFixture<AreasDropdownSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreasDropdownSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasDropdownSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
