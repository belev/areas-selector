import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'areas-selector',
  templateUrl: './areas-selector.component.html',
  styleUrls: ['./areas-selector.component.less']
})
export class AreasSelectorComponent {
  areas: Observable<{[key: string]: string}>;
  selectedAreas: string[] = [];

  constructor(private translationService: TranslationService) {
    translationService.languageChanged().subscribe(() => {
      this.areas = translationService.getTranslations('areas');
    });
  }

  onAreaSelected(area: string) {
    this.selectedAreas = [...this.selectedAreas, area];
  }

  onAreaDeselected(area: string) {
    this.selectedAreas = [...this.selectedAreas].filter(a => a !== area);
  }
}
