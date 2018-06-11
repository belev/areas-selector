import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'areas-map-selector',
  templateUrl: './areas-map-selector.component.html',
  styleUrls: ['./areas-map-selector.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreasMapSelectorComponent implements OnChanges {

  @Input() private selectedAreas: string[] = [];
  @Output() private areaSelected = new EventEmitter<string>();
  @Output() private areaDeselected = new EventEmitter<string>();

  areaToSelectedMap: {[areaId: string]: boolean} = {};

  ngOnChanges(changes: SimpleChanges) {
    this.areaToSelectedMap = changes.selectedAreas.currentValue
      .reduce((acc: {[areaId: string]: boolean}, areaId: string) => {
        acc[areaId] = true;
        return acc;
      }, {});
  }

  onAreaClick(event) {
    const targetElement = event.target || event.srcElement;
    const areaId = targetElement.attributes.id && targetElement.attributes.id.value;
    const isPark = targetElement.classList.contains('park');

    if (!areaId || isPark) {
      return;
    }

    if (!this.areaToSelectedMap[areaId]) {
      this.areaSelected.emit(areaId);
    } else {
      this.areaDeselected.emit(areaId);
    }
  }
}
