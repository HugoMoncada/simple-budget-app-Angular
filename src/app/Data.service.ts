import { EventEmitter } from "@angular/core";
import { Item } from "./models/Item.model";

export class Data{

    ingresos: Item[] = [];
    egresos: Item[] = [];

    agregar(item: Item, presupuestoTotal):void{
        if(item.getTipo() == "ingreso"){
            this.ingresos.push(item);
        }
        else{
            if(item.getMonto() > presupuestoTotal){
                return alert("Excede el presupuesto!");
            }
            this.egresos.push(item);
        }
    }

    eliminarRegistro(item: Item){
        if(item.getTipo() == "ingreso"){
            let indice = this.ingresos.indexOf(item);
            this.ingresos.splice(indice,1);
        }
        else{
            let indice = this.egresos.indexOf(item);
            this.egresos.splice(indice,1);
        }
    }
}