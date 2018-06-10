import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AreasSelectorComponent } from './components/areas-selector/areas-selector.component';
import { AreasMapSelectorComponent } from './components/areas-selector/areas-map-selector/areas-map-selector.component';
import { AreasDropdownSelectorComponent } from './components/areas-selector/areas-dropdown-selector/areas-dropdown-selector.component';
import { createTranslateLoader, TranslationService } from './services/translation.service';
import { ChangeLanguageComponent } from './components/change-language/change-language.component';

@NgModule({
  declarations: [
    AppComponent,
    AreasSelectorComponent,
    AreasMapSelectorComponent,
    AreasDropdownSelectorComponent,
    ChangeLanguageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MultiselectDropdownModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    TranslationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
