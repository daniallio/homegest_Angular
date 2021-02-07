import { SpesaInterface } from './../Interfaces/SpesaInterface';

export class Spesa implements SpesaInterface{
 public idSpesa: number;
 public spesaElenco: string;
 public codiceUtente: string;
 public invioMail: boolean;
 public errMail: string;
 public statoMail: string;
 public dateListaSpesa: Date;



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
