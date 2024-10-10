export default class CL_estudiante{
    constructor(nombre,acumnota,cantMateria){
        this.nombre=nombre;
        this.acumnota=acumnota;
        this.cantMateria=cantMateria;
        
    }
    set nombre(n){
        this._nombre= n;
    }
    get nombre(){
        return this._nombre;
    }
    set acumnota(aN){
        this._acumnota= +aN;
    }
    get acumnota(){
        return this._acumnota;
    }
    set cantMateria(cM){
        this._cantMateria= +cM;
    }
    get cantMateria(){
        return this._cantMateria;
    }
    

    promedio(){
       return this._acumnota/this.cantMateria;
    }
}