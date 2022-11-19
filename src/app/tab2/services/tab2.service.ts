import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Movimientos } from '../models/moves.model';

@Injectable({
  providedIn: 'root'
})
export class Tab2Service {

  constructor(public router: Router, private http: HttpClient) { }

  //Get Move
  getMove():Observable<Movimientos[]>{
    return this.http.get<Movimientos[]>(`${environment.apiURl}/movimientoes`);
  }
  //GetById Move
  getMoveById(moveId: string):Observable<Movimientos>{
    return this.http.get<Movimientos>(`${environment.apiURl}/movimientoes/`+moveId);
  }
  //UpdateMove
  updateMove(moveData: Movimientos, moveId: string):Observable<Movimientos>{
    return this.http.put<Movimientos>(`${environment.apiURl}/movimientoes/`+moveId, moveData);
  }
  //SaveMove
  saveMove(data: Movimientos):Observable<Movimientos>{
    return this.http.post<Movimientos>(`${environment.apiURl}/movimientoes`, data);
  }
}
