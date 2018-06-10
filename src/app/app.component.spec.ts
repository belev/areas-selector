import {TestBed, fakeAsync} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AreasSelectorComponent } from './components/areas-selector/areas-selector.component';
import { AreasMapSelectorComponent } from './components/areas-selector/areas-map-selector/areas-map-selector.component';
import { AreasDropdownSelectorComponent } from './components/areas-selector/areas-dropdown-selector/areas-dropdown-selector.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { TranslateModule } from '@ngx-translate/core';
import { ChangeLanguageComponent } from './components/change-language/change-language.component';
import { TranslationService } from './services/translation.service';

describe('AppComponent', () => {
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AreasSelectorComponent,
        AreasMapSelectorComponent,
        AreasDropdownSelectorComponent,
        ChangeLanguageComponent
      ],
      imports: [
        FormsModule,
        MultiselectDropdownModule,
        TranslateModule.forRoot()
      ],
      providers: [
        TranslationService
      ]
    }).compileComponents();
  }));

  it('should create the app', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
