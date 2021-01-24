import { Spesa } from './../class/Spesa';
import { SpesaService } from './../service/spesa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spesa-elenco',
  templateUrl: './spesa-elenco.component.html',
  styleUrls: ['./spesa-elenco.component.css']
})
export class SpesaElencoComponent implements OnInit {

elencoSpesa : [Spesa];
pagina = 1;
righe = 5;

  constructor(private spesaService: SpesaService) { }

  ngOnInit(): void {

    this.spesaService.getAllByUser('DANIALLIO').subscribe(
      (elenco : [Spesa]) => {

        this.elencoSpesa = elenco;
        console.log(this.elencoSpesa);
      }
    )

  }

}
