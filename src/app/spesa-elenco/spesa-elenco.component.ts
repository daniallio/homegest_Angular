import { Spesa } from './../class/Spesa';
import { SpesaService } from './../service/spesa.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-spesa-elenco',
  templateUrl: './spesa-elenco.component.html',
  styleUrls: ['./spesa-elenco.component.css']
})
export class SpesaElencoComponent implements OnInit {

elencoSpesa : [Spesa];
pagina = 1;
righe = 5;
@Output() emettoSpesa = new EventEmitter<Spesa>();


  constructor(private spesaService: SpesaService) { }

  ngOnInit(): void {

    this.spesaService.getAllByUser('DANIALLIO').subscribe(
      (elenco : [Spesa]) => {

        this.elencoSpesa = elenco;
        console.log(this.elencoSpesa);
      }
    )

  }


  datiSpesa(spesa : Spesa){
    this.emettoSpesa.emit(spesa);
    console.log(spesa);
  }



}
