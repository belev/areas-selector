import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AreasDropdownSelectorComponent } from './areas-dropdown-selector.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

describe('AreasDropdownSelectorComponent', () => {
  let component: AreasDropdownSelectorComponent;
  let fixture: ComponentFixture<AreasDropdownSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AreasDropdownSelectorComponent
      ],
      imports: [
        FormsModule,
        MultiselectDropdownModule
      ]
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
