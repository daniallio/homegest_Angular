import { SpesaService } from './../service/spesa.service';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Spesa } from '../class/Spesa';

@Component({
  selector: 'app-form-spesa',
  templateUrl: './form-spesa.component.html',
  styleUrls: ['./form-spesa.component.css']
})
export class FormSpesaComponent implements OnInit {

  @Input() spesa: Spesa;

  spesaElenco : string;
  invio : boolean;
  email : string;

  constructor(private spesaService : SpesaService) { }

  ngOnInit(): void {

this.spesa = new Spesa();

  }


invioSpesa(form : NgForm){

this.spesaElenco = form.value.spesa;
this.invio = form.value.invio;
this.email = form.value.email

this.spesa.codiceUtente = 'PIZZOMARTA';
this.spesa.invioMail = this.invio;
this.spesa.spesaElenco = this.spesaElenco;


this.spesaService.insSpesa(this.spesa).subscribe(
  (data : Spesa) => console.log(data));


}


}