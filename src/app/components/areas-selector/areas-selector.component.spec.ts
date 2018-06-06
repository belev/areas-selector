import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasSelectorComponent } from './areas-selector.component';
import {AreasDropdownSelectorComponent} from './areas-dropdown-selector/areas-dropdown-selector.component';
import {AreasMapSelectorComponent} from './areas-map-selector/areas-map-selector.component';

describe('AreasSelectorComponent', () => {
  let component: AreasSelectorComponent;
  let fixture: ComponentFixture<AreasSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AreasSelectorComponent,
        AreasMapSelectorComponent,
        AreasDropdownSelectorComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
