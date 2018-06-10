import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'change-language',
  templateUrl: './change-language.component.html',
  styleUrls: ['./change-language.component.less']
})
export class ChangeLanguageComponent {
  constructor(public translationService: TranslationService) { }
}
