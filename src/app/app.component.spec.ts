import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AreasSelectorComponent } from './components/areas-selector/areas-selector.component';
import { AreasMapSelectorComponent } from './components/areas-selector/areas-map-selector/areas-map-selector.component';
import { AreasDropdownSelectorComponent } from './components/areas-selector/areas-dropdown-selector/areas-dropdown-selector.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AreasSelectorComponent,
        AreasMapSelectorComponent,
        AreasDropdownSelectorComponent
      ],
      imports: [
        FormsModule,
        MultiselectDropdownModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
