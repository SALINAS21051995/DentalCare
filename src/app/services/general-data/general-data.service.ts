import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { httpHost, httpActions, httpOptions } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GeneralDataService {

  constructor(private http: HttpClient) { }

  public getTodaysPatients(): Observable<any>{
    let api = httpHost+httpActions.clinicHistory.getPatients;
    return this.http.get<any>(api)
  }
}
