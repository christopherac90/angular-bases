import { Component } from '@angular/core';

@Component({
    selector:'app-contador',
    template:`<h1>{{titulo}} Mundo</h1>
    <h1>La base es: {{base}}</h1>
    <button (click)="acumular(base)">+{{base}}</button>
    <span> {{numero}}     </span>
    <button (click)="acumular(-base)">-{{base}}</button>`


})
export class ContadorComponent{
    public titulo:string = 'Contador App ';
    numero: number = 10;
    base: number = 5;
  
    acumular(valor: number){
      this.numero += valor;
    }

}