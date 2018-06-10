import {EventEmitter, Injectable} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Observable } from 'rxjs';
import { LangChangeEvent } from '@ngx-translate/core/lib/translate.service';

@Injectable()
export class TranslationService {
  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['en', 'bg']);
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }

  languageChanged(): EventEmitter<LangChangeEvent> {
    return this.translateService.onLangChange;
  }

  getTranslations(key: string): Observable<{[key: string]: string}> {
    return this.translateService.get(key);
  }

  setLanguage(language: string) {
    this.translateService.use(language);
  }
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
