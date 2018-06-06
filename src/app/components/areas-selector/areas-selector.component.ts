import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'areas-selector',
  templateUrl: './areas-selector.component.html',
  styleUrls: ['./areas-selector.component.less']
})
export class AreasSelectorComponent implements OnInit {
  selectedAreas: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  onAreaSelected(area: string) {

  }

}
