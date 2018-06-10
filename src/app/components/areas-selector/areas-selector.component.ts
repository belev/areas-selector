import { Component, OnDestroy } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'areas-selector',
  templateUrl: './areas-selector.component.html',
  styleUrls: ['./areas-selector.component.less']
})
export class AreasSelectorComponent implements OnDestroy {
  private languageChangedSubscription: Subscription;

  areas: Observable<{[key: string]: string}>;
  selectedAreas: string[] = [];

  constructor(private translationService: TranslationService) {
    this.languageChangedSubscription = translationService.languageChanged().subscribe(() => {
      this.areas = translationService.getTranslations('areas');
    });
  }

  ngOnDestroy() {
    this.languageChangedSubscription.unsubscribe();
  }

  onAreaSelected(area: string) {
    this.selectedAreas = [...this.selectedAreas, area];
  }

  onAreaDeselected(area: string) {
    this.selectedAreas = [...this.selectedAreas].filter(a => a !== area);
  }
}
