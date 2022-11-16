import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Worker } from 'src/app/auth/shared/models/worker.model';
import { UpdateUserDTO} from '../requests-dto/update-user.dto';
import { VerifyPhone } from 'src/app/auth/shared/models/verifyPhone.model';

@Injectable({
  providedIn: 'root'
})
export class Tab3Service {

  constructor( public router: Router, private http: HttpClient ) { }

  //GetById
  getUserData(userId: string):Observable<Worker>{
    return this.http.get<Worker>(`${environment.apiURl}/workers/`+userId);
  }
  //UpdateData
  updateUserData(userData: UpdateUserDTO, userId: string):Observable<Worker>{
    return this.http.put<Worker>(`${environment.apiURl}/workers/`+userId, userData);
  }
  //Verify GET
  verifyPhone(cellphone:string):Observable<VerifyPhone>{
    //Verify using the api_key and put phone data string
    return this.http.get<VerifyPhone>(`https://phonevalidation.abstractapi.com/v1/?api_key=6dfd2a5b894843c8a8832dc8a23432cb&phone=`+cellphone);
  }
}
