import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'areas-dropdown-selector',
  templateUrl: './areas-dropdown-selector.component.html',
  styleUrls: ['./areas-dropdown-selector.component.less']
})
export class AreasDropdownSelectorComponent implements OnInit {

  @Input() selectedAreas: string[];
  @Output() areaSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
