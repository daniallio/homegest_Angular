import { SpesaInterface } from './../Interfaces/SpesaInterface';

export class Spesa implements SpesaInterface{
  idSpesa: number;
  spesaElenco: string;
  codiceUtente: string;
  invioMail: boolean;
  errMail: string;
  statoMail: string;
  dateListaSpesa: Date;



  constructor() {

    this.idSpesa = null;
    this.spesaElenco = null;
    this.codiceUtente= null;
    this.invioMail= false;
    this.errMail = null;
    this.statoMail = null;
    this.dateListaSpesa = null;


  }

}
