import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


const url = "http://localhost:8080/"
const astro_url = "http://localhost:5000/"

@Injectable()
export class BirthdayService {

  constructor( private http: HttpClient) { }
  
  public getBirthday( name: string ): Observable<any> {
    return this.http.get(url + name);
  }

  public getList(): Observable<any> {
    return this.http.get(url + "list");
  }

  public getAstrology(birthday): Observable<any> {
    console.log("getting birthday: ", birthday);
    return this.http.get(astro_url + birthday);
  }
}
