import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor() { }

  numero:number = 15;

  sumar(){
    this.numero +=1;
  }

  resta(){
    this.numero -=1;
  }


  //espera un numero como respuesta
  accionOperacion( valor:number ){
    this.numero +=valor;
  }

  ngOnInit(): void {
  }

}
