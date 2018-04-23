import { Component, OnInit, Input } from '@angular/core';
import { Planet } from '../data-structs';

@Component({
  selector: 'app-planet-summary',
  templateUrl: './planet-summary.component.html',
  styleUrls: ['./planet-summary.component.scss']
})
export class PlanetSummaryComponent implements OnInit {
  @Input() planets: Planet[]
  constructor() { }

  ngOnInit() { }
}
