import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Worker } from 'src/app/auth/shared/models/worker.model';
import { VerifyPhone } from '../../shared/models/verifyPhone.model';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(public router: Router, private http: HttpClient) { }
  //Register POST
  register(data: Worker):Observable<Worker>{
    return this.http.post<Worker>(`${environment.apiURl}/workers`, data);
  }
  //Verify GET
  verifyPhone(cellphone:string):Observable<VerifyPhone>{
    //Verify using the api_key and put phone data string
    return this.http.get<VerifyPhone>(`https://phonevalidation.abstractapi.com/v1/?api_key=6dfd2a5b894843c8a8832dc8a23432cb&phone=`+cellphone);
  }
}
