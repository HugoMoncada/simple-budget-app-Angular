import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../Data.service';
import { Item } from '../models/Item.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  descripcion: string;
  monto: number;
  tipo: string = "ingreso";
  @Input() presupuestoTotal;

  constructor(private dataService: Data) { }



  ngOnInit(){
  }

  enviaritem(){
    let item: Item = new Item(this.descripcion, this.monto, this.tipo);
    if(item.getMonto() <= 0){
      return alert("El monto no puede ser negativo ó = 0")
    }
    this.dataService.agregar(item,this.presupuestoTotal);
    this.descripcion ="";
    this.monto= 0;
  }

  getTipo(event){
    this.tipo = event.target.value;
  }

}
