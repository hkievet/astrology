import { Component, OnInit, Input } from '@angular/core';
import { Planet } from '../data-structs';
import { AccordianAnimation } from '../animations/accordian';

@Component({
  selector: 'app-planet-summary',
  templateUrl: './planet-summary.component.html',
  styleUrls: ['./planet-summary.component.scss'],
  animations: [AccordianAnimation],
})
export class PlanetSummaryComponent implements OnInit {
  @Input() planets: Planet[]

  constructor() { }

  ngOnInit() { }

  public getDetails(planet: Planet) { }
}
