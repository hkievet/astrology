import { Component, OnInit } from '@angular/core';
import { BirthdayService } from './birthday.service';
import { Planet } from './data-structs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor( private birthdayService: BirthdayService ) { }

  title = 'Astrolizer';
  public inputDate: Date; // the search text
  public searchDate: Date;
  public errorMsg: string; // the error message to be displayed
  public loading = false;
  public time = "12:00 AM UTC";

  public planets: Planet[] = [];

  public ngOnInit() {
  }

  // todo: convert this to a pipe because this is a pure function computed on the server side of things
  public getAstrology(date) {
    this.errorMsg = "";
    this.planets = [];
    if (validateDate(date) === "") {
      this.errorMsg = "Invalid Date";
      return;
    }
    this.searchDate = date;
    this.loading = true;
    this.birthdayService.getAstrology(date).subscribe(a => {
      this.planets=a;
      this.loading = false;
    });
  }
}

function validateDate(date: string): string {
  if (!date) { 
    return "";
  } else {
    return "yes";
  }
  /*
  if ( !new Date(date) ) {
    return "";
  }
  const split = String(date).split('/');
  if ( split || split.length < 3 ) {
    return ""
  }

  let d = Number(split[0]);
  let m = Number(split[1]);
  let y = Number(split[2]);

  if (d === NaN || m === NaN || y === NaN ) {
    return ""
  }

  if (Number(d) === NaN || Number(m) === NaN || Number(y) === NaN) {
    return ""
  }
  */
}

