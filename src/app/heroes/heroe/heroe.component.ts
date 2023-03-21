import {Component} from '@angular/core';

@Component({
    selector:'app-heroe',
    templateUrl: 'heroe.component.html'



})
export class HeroeComponent{
nombre: string= 'IronMan'
edad: number = 45;

get nombreCapitalizado(){
    return this.nombre.toUpperCase();

}
obtenerNumber():string {

    return `${this.nombre}  -  ${this.edad}`
}

cambiarNombre(){
    this.nombre = 'Spiderman';
}

cambiarEdad(){
    this.edad = 30;
}
}