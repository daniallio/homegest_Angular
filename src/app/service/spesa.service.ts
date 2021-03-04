import { Spesa } from './../class/Spesa';
import { SpesaInterface } from './../Interfaces/SpesaInterface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpesaService {


  private APIURL = 'http://localhost:8090/api/spesa'


  constructor(private http: HttpClient) {

  }

  getAllByUser(codice : String){
    return this.http.get<Spesa[]>(this.APIURL + '/user/' + codice);
  }

  insSpesa (spesa : Spesa){
    return this.http.post<Spesa>(this.APIURL + '/inserisci',spesa);
  }

  delSpesa (idSpesa){
    return this.http.delete<Spesa>(this.APIURL + '/elimina/' + idSpesa);
  }


  updSpesa (spesa : Spesa){

    return this.http.put<Spesa>(this.APIURL + '/aggiorna', spesa);

  }

}
