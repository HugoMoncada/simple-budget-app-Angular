export class Item{
    
    constructor(private descripcion:string, private monto:number, private tipo:string){}

    public getTipo(){
        return this.tipo;
    }
    public getDescripcion(){
        return this.descripcion;
    }
    public getMonto(){
        return this.monto;
    }

}