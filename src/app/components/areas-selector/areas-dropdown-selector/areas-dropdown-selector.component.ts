import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IMultiSelectOption, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'areas-dropdown-selector',
  templateUrl: './areas-dropdown-selector.component.html',
  styleUrls: ['./areas-dropdown-selector.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreasDropdownSelectorComponent implements OnInit, OnChanges {
  @Input() areas: string[];
  @Input() selectedAreas: string[];

  @Output() areaSelected: EventEmitter<string> = new EventEmitter<string>();
  @Output() areaDeselected: EventEmitter<string> = new EventEmitter<string>();

  settings: IMultiSelectSettings;
  options: IMultiSelectOption[];
  selectedOptions: string[];

  ngOnInit() {
    this.settings = {
      enableSearch: true
    };

    this.options = this.areas
      .slice(0)
      .sort()
      .map(area => ({ id: area, name: area }));
  }

  ngOnChanges(changes: SimpleChanges) {
    this.selectedOptions = [...changes.selectedAreas.currentValue];
  }

  onAdded(value) {
    this.areaSelected.emit(<string>value);
  }

  onRemoved(value) {
    this.areaDeselected.emit(<string>value);
  }
}
