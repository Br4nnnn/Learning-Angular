import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {

  hermanoMayor?: string;
  hermanoMenor?: string;

  gethermanoMayor() {
    return this.hermanoMayor || '';
  }

  sethermanoMayor(hermano: string){
    this.hermanoMayor = hermano;
  }

  gethermanoMenor(){
    return this.hermanoMenor || '';
  }

  sethermanoMenor(hermano: string){
    this.hermanoMenor = hermano;
  }

  saludar(hermano: string){
    console.log(`hola ${hermano}`);
  }

  preguntarporHijo(): string{
    return '¿Cómo está tu hijo?';
  }
}