import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


const astro_url = "https://18.208.88.67:5000/"

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
  date = new Date(date);
  // take the date and adjust for utc
  const dateSplit = [ date.getUTCDate(), date.getUTCMonth(), date.getUTCFullYear(), date.getUTCHours(), date.getUTCMinutes() ]
  let newDate = dateSplit[2] + '-' + (dateSplit[1] + 1) + '-' + dateSplit[0] + ' ' + dateSplit[3] + ':' + dateSplit[4];
  return newDate
}
