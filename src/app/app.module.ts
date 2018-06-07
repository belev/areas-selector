import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import { AppComponent } from './app.component';
import { AreasSelectorComponent } from './components/areas-selector/areas-selector.component';
import { AreasMapSelectorComponent } from './components/areas-selector/areas-map-selector/areas-map-selector.component';
import { AreasDropdownSelectorComponent } from './components/areas-selector/areas-dropdown-selector/areas-dropdown-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    AreasSelectorComponent,
    AreasMapSelectorComponent,
    AreasDropdownSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MultiselectDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
