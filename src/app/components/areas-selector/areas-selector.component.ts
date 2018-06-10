import { Component } from '@angular/core';
import { Areas } from '../../shared/areas';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'areas-selector',
  templateUrl: './areas-selector.component.html',
  styleUrls: ['./areas-selector.component.less']
})
export class AreasSelectorComponent {
  areas: string[] = Areas;
  selectedAreas: string[] = [];

  constructor(translationService: TranslationService) { }

  onAreaSelected(area: string) {
    this.selectedAreas = [...this.selectedAreas, area];
  }

  onAreaDeselected(area: string) {
    this.selectedAreas = [...this.selectedAreas].filter(a => a !== area);
  }
}
