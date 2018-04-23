import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-astro-styleguide',
  templateUrl: './astro-styleguide.component.html',
  styleUrls: ['./astro-styleguide.component.scss']
})
export class AstroStyleguideComponent implements OnInit {

  @Input() sign: string;

  private signs = [ "ARIES", "TAURUS", "GEMINI", "CANCER", "LEO", "VIRGO", "LIBRA", "SCORPIO", "SAGITTARIUS", "CAPRICORN", "AQUARIUS", "PISCES" ];

  constructor() { }

  ngOnInit() {
    if (!this.sign || this.signs.indexOf(this.sign) === -1) {
      console.error("bad zodiac sign sent to the astro styleguide component: ", this.sign);
    }
   }
}
