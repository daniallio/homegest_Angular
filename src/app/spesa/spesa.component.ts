import { Spesa } from './../class/Spesa';


import { Component, OnInit } from '@angular/core';
import { SpesaService } from '../service/spesa.service';

@Component({
  selector: 'app-spesa',
  templateUrl: './spesa.component.html',
  styleUrls: ['./spesa.component.css']
})
export class SpesaComponent implements OnInit {

spesaParent : Spesa;
messaggioRespParent : boolean = false;


  constructor(private spesaService : SpesaService) { }

  ngOnInit(): void {
    this.spesaParent = new Spesa();
    console.log('ora' + this.messaggioRespParent);


  }

  setSpesa($event){

    this.spesaParent = $event;
    this.messaggioRespParent = false;
    console.log('ora2' + this.messaggioRespParent);

  }



}
