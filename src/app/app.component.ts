import { Component, OnInit } from '@angular/core';
import { Data } from './Data.service';
import { Item } from './models/Item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'app-presupuesto';
  
  ingresos: Item[] = [];
  egresos: Item[] = [];

  presupuesto: number = 0;
  ingresosTotales: number = 0; 
  egresosTotales:number = 0;

  constructor(private dataService: Data){
    // this.dataService.nuevoingreso.subscribe((itemList) => {
    //   for(let i = 0; i < itemList.length; i++) {
    //     this.ingresos.push(itemList[i]);
    //   }
    // });
    this.ingresos = dataService.ingresos;
    this.egresos = dataService.egresos;
  }

  ngOnInit(): void {
    console.log("on init de app")
  }

  getIngresoTotal(){
    let ingresoTotal =0;
    this.ingresos.forEach(item => {
      ingresoTotal += item.getMonto();
    })
    return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal =0;
    this.egresos.forEach(item => {
      egresoTotal += item.getMonto();
    })
    return egresoTotal;
  }

  getPresupuesto(){
    return this.getIngresoTotal() - this.getEgresoTotal();
  }

  getPorcentajeTotal(){
    if(this.getEgresoTotal() != 0 && this.getEgresoTotal() != 0){
      return this.getEgresoTotal() / this.getIngresoTotal();
    }
    return 0;
  }

}
