import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../Data.service';
import { Item } from '../models/Item.model';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  egresos: Item[] = [];
  @Input() ingresosTotales;

  constructor(private dataService: Data) {}

  ngOnInit(): void {
    this.egresos = this.dataService.egresos;
  }

  calcularPorcentaje(item: Item){
    return item.getMonto() / this.ingresosTotales;
  }

  eliminarRegistro(item: Item){
    this.dataService.eliminarRegistro(item);
  }

}
