import { Spesa } from './../class/Spesa';
import { SpesaService } from './../service/spesa.service';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-form-spesa',
  templateUrl: './form-spesa.component.html',
  styleUrls: ['./form-spesa.component.css']
})
export class FormSpesaComponent implements OnInit {

  @Input()   spesa: Spesa;
  @Input() messaggioOK : boolean = false;
  messaggioResp : string; //messaggio di ok

  spesaElenco : string;
  invio : boolean;
  email : string;

  constructor(private spesaService : SpesaService) { }

  ngOnInit(): void {

  this.spesa = new Spesa();
console.log(this.messaggioOK)

}



invioSpesa(form : NgForm){

/*this.spesaElenco = form.value.spesa;
this.invio = form.value.invio;
this.email = form.value.email*/

this.spesa.codiceUtente = 'DANIALLIO';
this.spesa.invioMail = form.value.invio;
this.spesa.spesaElenco = form.value.spesa;

//se non esite l'id sono in inserimento

if(this.spesa.idSpesa == null){
  this.spesaService.insSpesa(this.spesa).subscribe(
    (data : Spesa) => console.log('inserisco spesa ' + data));
}else{
  this.spesaService.updSpesa(this.spesa).subscribe(
    (data : Spesa) => {

      this.messaggioResp = 'Spesa aggiornata correttamente';
     // this.messaggioOK = true;
      console.log('aggiorno spesa ' + data)
    }
  );
}


console.log('messaggioooooo ' + this.messaggioOK)
this.messaggioOK = true;

}

eliminaSpesa(idSpesa : number){
  console.log("elimino spesa" + idSpesa)

  this.spesaService.delSpesa(idSpesa).subscribe(
    (data) => console.log(data));


}


}
