import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Planet } from './data-structs';


const astro_url = "http://api.astrolizer.com:5000/"
// const astro_url = "http://localhost:5000/"

@Injectable()
export class BirthdayService {

  constructor( private http: HttpClient) { }

  /**
   * @param birthday should be 'mm/dd/yyyy' american date style
   */
  public getAstrology(birthday: Date): Observable<any> {
    // format date
    const birthdayStr = formatWeirdServerDate(birthday); // server expects yyyy/mm/dd *rolls eyes*
    return this.http.get(astro_url + birthdayStr).pipe(map( (planets: Planet[]) => {
      return planets.map( (planet: Planet) => {
        return new Planet().fromJSON(planet);
      })
    }))
  }
}

function formatWeirdServerDate(date: Date): string {
  date = new Date(date);
  // take the date and adjust for utc
  const dateSplit = [ date.getUTCDate(), date.getUTCMonth(), date.getUTCFullYear(), date.getUTCHours(), date.getUTCMinutes() ]
  let newDate = dateSplit[2] + '-' + (dateSplit[1] + 1) + '-' + dateSplit[0] + ' ' + dateSplit[3] + ':' + dateSplit[4];
  return newDate
}
