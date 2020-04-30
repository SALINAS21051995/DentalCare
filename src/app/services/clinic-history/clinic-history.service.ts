import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { httpHost, httpActions, httpOptions } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClinicHistoryService {

  constructor(private http: HttpClient) { }

  public createHistory(data): Observable<any>{               
    let api = httpHost+httpActions.clinicHistory.create;
    return this.http.post<any>(api, data, httpOptions);
  }

  public getTodayPatient(){
    
  }
}
