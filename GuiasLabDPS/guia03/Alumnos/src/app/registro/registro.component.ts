import { Component, OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registro=[];
  alumno:any;
  nombre:string;
  mayor:string;
  edad:number;
  contador:number;
  constructor() { }

  ngOnInit(): void {
    this.edad = 0;
    this.contador=0;
    this.nombre="";
  }
  ingresar(){
    if(this.edad>0 && this.edad<18){
      this.mayor = 'no';
    }else{
      this.mayor = 'si';
    }
    this.alumno={"nombre":this.nombre,"edad":this.edad,"mayor":this.mayor};
    this.registro.push(this.alumno);
    this.contador++;
  }

}
