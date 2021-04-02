import { Component, OnInit } from '@angular/core';
import { Data } from '../Data.service';
import { Item } from '../models/Item.model';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  ingresos: Item[] = [];

  constructor(private dataService: Data) { 
    this.ingresos = dataService.ingresos;
  }

  ngOnInit(): void {
    this.ingresos = this.dataService.ingresos;
  }

  eliminarRegistro(item: Item){
    this.dataService.eliminarRegistro(item);
  }


}
