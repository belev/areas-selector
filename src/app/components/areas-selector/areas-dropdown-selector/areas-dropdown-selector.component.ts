import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges
} from '@angular/core';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { TranslationService } from '../../../services/translation.service';
import { LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'areas-dropdown-selector',
  templateUrl: './areas-dropdown-selector.component.html',
  styleUrls: ['./areas-dropdown-selector.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreasDropdownSelectorComponent implements OnChanges, OnDestroy {
  @Input() private areas: {[key: string]: string} = {};
  @Input() private selectedAreas: string[] = [];

  @Output() private areaSelected: EventEmitter<string> = new EventEmitter<string>();
  @Output() private areaDeselected: EventEmitter<string> = new EventEmitter<string>();

  private languageChangedSubscription: Subscription;

  settings: IMultiSelectSettings;
  textsSettings: IMultiSelectTexts;
  options: IMultiSelectOption[];
  selectedOptions: string[];

  constructor(private translationService: TranslationService) {
    this.settings = {
      enableSearch: true,
      showCheckAll: true,
      showUncheckAll: true,
      checkedStyle: 'fontawesome',
      dynamicTitleMaxItems: 1
    };

    this.languageChangedSubscription = translationService.languageChanged().subscribe((event: LangChangeEvent) => {
      this.textsSettings = {
        defaultTitle: event.translations['Select areas'],
        checkAll: event.translations['Select all'],
        uncheckAll: event.translations['Deselect all'],
        checkedPlural: event.translations['selected'],
        searchPlaceholder: event.translations['Search'],
        searchEmptyResult: event.translations['Nothing found']
      };
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.areas && changes.areas.currentValue) {
      this.options = Object.keys(changes.areas.currentValue)
        .map(areaKey => ({ id: areaKey, name: changes.areas.currentValue[areaKey] }))
        .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    }

    if (changes.selectedAreas && changes.selectedAreas.currentValue) {
      this.selectedOptions = [...changes.selectedAreas.currentValue];
    }
  }

  ngOnDestroy() {
    this.languageChangedSubscription.unsubscribe();
  }

  onAdded(value) {
    this.areaSelected.emit(<string>value);
  }

  onRemoved(value) {
    this.areaDeselected.emit(<string>value);
  }
}
