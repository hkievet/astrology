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

  title = 'app';
  public wikiName: string
  public birthday = ""
  public entryList: {id: string, name: string, birthday: string}[] = [] ;
  public loading = false;
  public planets: Planet[] = [];

  public ngOnInit() {
    this.setBirthdayList();
  }

  public setBirthdayList() {
    this.birthdayService.getList().subscribe( l => {
      this.entryList = l;
      this.entryList = this.entryList.filter( (entry) => {
        return Boolean(entry.birthday)
      });
    });
  }

  public getBirthday() {
    if (this.wikiName) {
      this.loading=true;
      this.birthdayService.getBirthday(this.wikiName).subscribe( t => {
        this.loading=false;
        this.birthday = (t as any).birthday;
        this.setBirthdayList();
      })
    }
  }

  // todo: convert this to a pipe because this is a pure function computed on the server side of things
  public getAstrology(date) {
    this.birthdayService.getAstrology(date).subscribe(a => {
      this.planets=a;
    });
  }
}
