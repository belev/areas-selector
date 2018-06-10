import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AreasSelectorComponent } from './areas-selector.component';
import { AreasDropdownSelectorComponent } from './areas-dropdown-selector/areas-dropdown-selector.component';
import { AreasMapSelectorComponent } from './areas-map-selector/areas-map-selector.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { TranslationService } from '../../services/translation.service';

describe('AreasSelectorComponent', () => {
  let component: AreasSelectorComponent;
  let fixture: ComponentFixture<AreasSelectorComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AreasSelectorComponent,
        AreasMapSelectorComponent,
        AreasDropdownSelectorComponent
      ],
      imports: [
        FormsModule,
        MultiselectDropdownModule,
        TranslateModule.forRoot()
      ],
      providers: [
        TranslationService
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
