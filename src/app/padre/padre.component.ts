import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  contador: number = 0;
  mensajepadre = "este es el mensaje del padre";
  event: string | undefined;
  nombre?: string;
  mensajeRecibido: string = '';

  constructor(
    private servicioFamiliarService: ServicioFamiliarService
  ){}
  
  ngOnInit(): void{
    this.servicioFamiliarService.sethermanoMayor('Pedro');
    this.servicioFamiliarService.gethermanoMayor();
  }

  saludar(){
    this.servicioFamiliarService.saludar(this.servicioFamiliarService.gethermanoMenor()||'');
  }

  preguntar(){
    console.log(this.servicioFamiliarService.preguntarporHijo())
  }



  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }

  recibirmensaje($event: string) {
    this.mensajeRecibido = $event;
  }
}