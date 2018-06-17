import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


// const url = "http://localhost:8080/"
const astro_url = "http://35.173.122.138:5000/"

@Injectable()
export class BirthdayService {

  constructor( private http: HttpClient) { }

  /**
   * @param birthday should be 'mm/dd/yyyy' american date style
   */
  public getAstrology(birthday: Date): Observable<any> {
    // format date
    const birthdayStr = formatWeirdServerDate(birthday); // server expects yyyy/mm/dd *rolls eyes*
    return this.http.get(astro_url + birthdayStr);
  }
}

function formatWeirdServerDate(date: Date): string {
  const dateSplit = [ date.getDate(), date.getMonth(), date.getFullYear() ]
  let newDate = dateSplit[2] + '-' + (dateSplit[1] + 1) + '-' + dateSplit[0]
  console.log(dateSplit);
  return newDate
}
