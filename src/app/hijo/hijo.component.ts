import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Output() mensajeDesdeHijo = new EventEmitter<string>();
  @Output() incrementarDesdeHijo = new EventEmitter<void>();
  @Output() decrementarDesdeHijo = new EventEmitter<void>();

    mensaje: string = '';
  enviarMensaje() {
    this.mensajeDesdeHijo.emit(this.mensaje);
  }

  @Output() mensajeHijo = new EventEmitter<string>();

  contador: number = 0;
  @Input() recibehijo: string ='';

  decrementar(){
    this.contador--;

  }
  incrementar(){
    this.contador++;
  }
}