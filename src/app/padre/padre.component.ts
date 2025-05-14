import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  contador: number = 0;
  mensajepadre= "este es el mensaje del padre";
event: string | undefined;
  
  incrementar(){
    this.contador++;
  }

  decrementar(){
    this.contador--;

  }

  mensajeRecibido: string = '';
  recibirmensaje($event:string){
    this.mensajeRecibido = $event;
  }
}