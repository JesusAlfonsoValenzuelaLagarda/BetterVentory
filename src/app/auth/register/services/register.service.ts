import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Worker } from 'src/app/auth/shared/models/worker.model';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(public router: Router, private http: HttpClient) { }
  
  register(data: Worker):Observable<Worker>{
    return this.http.post<Worker>(`${environment.apiURl}/workers`, data);
  }
}
