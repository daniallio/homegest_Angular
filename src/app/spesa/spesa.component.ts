import { Spesa } from './../class/Spesa';


import { Component, OnInit } from '@angular/core';
import { SpesaService } from '../service/spesa.service';

@Component({
  selector: 'app-spesa',
  templateUrl: './spesa.component.html',
  styleUrls: ['./spesa.component.css']
})
export class SpesaComponent implements OnInit {

  constructor(private spesaService : SpesaService) { }

  ngOnInit(): void {

  }





}
