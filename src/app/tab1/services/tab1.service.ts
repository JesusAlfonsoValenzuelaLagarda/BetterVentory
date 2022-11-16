import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UpdateUserDTO } from 'src/app/tab3/requests-dto/update-user.dto';
import { environment } from 'src/environments/environment';
import { Package } from '../models/package.model';
@Injectable({
  providedIn: 'root'
})
export class Tab1Service {

  constructor(public router: Router, private http: HttpClient) { }

  //Get
  getPackages():Observable<Package[]>{
    return this.http.get<Package[]>(`${environment.apiURl}/packages`);
  }
  //GetById
  getPackageById(userId: string):Observable<Package>{
    return this.http.get<Package>(`${environment.apiURl}/packages/`+userId);
  }
  //UpdatePackage
  updatePackages(packageData: Package, packageId: string):Observable<Package>{
    return this.http.put<Package>(`${environment.apiURl}/packages/`+packageId, packageData);
  }
  //SavePackage
  savePackage(data: Package):Observable<Package>{
    return this.http.post<Package>(`${environment.apiURl}/packages`, data);
  }
}
