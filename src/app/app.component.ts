import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BirthdayService } from './birthday.service';
import { Planet } from './data-structs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('dateInput') dateInputElement: ElementRef;
  constructor(private birthdayService: BirthdayService) { }

  title = 'Astrolizer';
  public searchDate: Date;
  public errorMsg: string; // the error message to be displayed
  public loading = false;
  public today = new Date();
  public inputDate: Date; // the search text

  public planets: Planet[] = [];

  public ngOnInit() {
    this.getAstrology(new Date());
  }

  // todo: convert this to a pipe because this is a pure function computed on the server side of things
  public getAstrology(date: Date) {
    this.errorMsg = "";
    this.planets = [];
    if (validateDate(date) === "") {
      this.errorMsg = "Invalid Date";
      return;
    }
    let inputString = this.dateInputElement.nativeElement.value;
    // if there is no time, default the time to noon
    if (inputString.split(' ').length == 1) {
      inputString += " 12:00 PM"
      date.setHours(12);
    }
    this.dateInputElement.nativeElement.value = inputString;
    this.searchDate = date;
    this.loading = true;
    this.birthdayService.getAstrology(date).subscribe( planets => {
      this.planets = planets;
      this.loading = false;
    });
  }
}

function validateDate(date: Date): string {
  if (!date || !new Date(date)) {
    return "";
  } else {
    return "yes";
  }
}

