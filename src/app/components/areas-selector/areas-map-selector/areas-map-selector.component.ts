import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'areas-map-selector',
  templateUrl: './areas-map-selector.component.html',
  styleUrls: ['./areas-map-selector.component.less']
})
export class AreasMapSelectorComponent implements OnInit {

  @Input() selectedAreas: string[];
  @Output() areaSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
