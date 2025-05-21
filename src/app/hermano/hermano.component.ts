import { Component, Signal } from '@angular/core';
import { OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrls: ['./hermano.component.css']
})
export class HermanoComponent implements OnInit {
  constructor(
    private servicioFamiliarService: ServicioFamiliarService
  ){}
  nombre?: string;
  ngOnInit(): void{
    this.servicioFamiliarService.sethermanoMenor('Lucas');
    this.nombre = this.servicioFamiliarService.gethermanoMenor();
  }

  saludar(){
    this.servicioFamiliarService.saludar(this.servicioFamiliarService.gethermanoMenor());
    
  }
}
