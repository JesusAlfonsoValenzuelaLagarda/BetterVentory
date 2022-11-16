import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Worker } from '../../shared/models/worker.model'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public router: Router, private http: HttpClient) { }

  logIn(credentials: any):Observable<Worker>{
    return this.http.post<Worker>(`${environment.apiURl}/security/login`, credentials);
  }
  logInToTestOffline(credentials: any):Observable<Worker>{
    return ;
  }
}
