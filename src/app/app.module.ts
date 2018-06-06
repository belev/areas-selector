import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
