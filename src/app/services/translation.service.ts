import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@Injectable()
export class TranslationService {
  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['en', 'bg']);
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }

  public setLanguage(language: string) {
    this.translateService.use(language);
  }
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
