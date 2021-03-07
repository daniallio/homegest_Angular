import { Spesa } from './../class/Spesa';
import { SpesaService } from './../service/spesa.service';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-spesa',
  templateUrl: './form-spesa.component.html',
  styleUrls: ['./form-spesa.component.css']
})
export class FormSpesaComponent implements OnInit {

  @Input()   spesa: Spesa;
  @Input() messaggioOK : boolean = false;
  @Input() messaggioERR : boolean = false;
  messaggioResp : string; //messaggio di ok

  spesaElenco : string;
  invio : boolean;
  email : string;

  constructor(private spesaService : SpesaService,private router: Router) {}

  ngOnInit(): void {

  this.spesa = new Spesa();
  console.log("ONINIT")
 console.log(this.messaggioOK)

}

//metodo che viene chiamato ogni volta che viene passato un valora ad una variabile @input
ngOnChanges(changes) {
  console.log(changes); // new value updated
  this.messaggioOK = false;
  this.messaggioERR = false;
}

invioSpesa(form : NgForm){

/*this.spesaElenco = form.value.spesa;
this.invio = form.value.invio;
this.email = form.value.email*/

this.spesa.codiceUtente = 'DANIALLIO';
this.spesa.invioMail = form.value.invio;
this.spesa.spesaElenco = form.value.spesa;

//se non esite l'id sono in inserimento

if(this.spesa.idSpesa == null){ //inserimento
  this.spesaService.insSpesa(this.spesa).subscribe(
    (data : Spesa) => {
     this.okResponse("Spesa inserita correttamente");
    },
    (error) => {
      this.errorResponse(error)
    }
  );
}else{ //aggiorno
  this.spesaService.updSpesa(this.spesa).subscribe(
    (data : Spesa) => {

      this.okResponse("Spesa aggiornata correttamente");
    },
    (error) => {
      this.errorResponse(error)
    }
  );
}

}

//elimino la spesa selezionata
eliminaSpesa(idSpesa : number){
  console.log("elimino spesa" + idSpesa)

  this.spesaService.delSpesa(idSpesa).subscribe(
    (data) => {
      window.location.reload()
      //this.router.navigate(['spesa']);

    });
}

//funzione che setta il messaggio di errore in caso di errori nelle chiamate
errorResponse(error){
  this.messaggioResp =error.error.messaggio;
  this.messaggioERR = true;
}

//funzione che setta il messaggio di ok
okResponse(mex : string){
  this.messaggioResp =mex;
  this.messaggioOK = true;
}



}
