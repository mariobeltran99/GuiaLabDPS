import { Component } from '@angular/core';
import { getMaxListeners } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'Pablo Rodríguez';
  edad:number = 18;
  email:string = 'rpablo@gmail.com';
  sueldo:Array<number> =[1700,1600,1500];
  activo:boolean = true;
  sitio:string = 'https://www.google.com';
  contador:number = 1;

  incrementar(){
    this.contador++;
  }
  decrementar(){
    this.contador--;
  }

  esActivo(){
    if(this.activo){
      return 'Trabajador Activo'
    }else{
      return 'Trabajador Inactivo'
    }
  }
  ultimos3sueldos(){
    let suma = 0;
    for(let x=0;x<this.sueldo.length;x++){
      suma+=this.sueldo[x];
    }
    return suma;
  }
}
