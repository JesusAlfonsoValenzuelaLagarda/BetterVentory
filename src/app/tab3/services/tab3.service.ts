import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Worker } from 'src/app/auth/shared/models/worker.model';
import { UpdateUserDTO} from '../requests-dto/update-user.dto';

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
  updateUserData(userData: UpdateUserDTO):Observable<Worker>{
    return this.http.put<Worker>(`${environment.apiURl}/workers/`, userData);
  }
}
