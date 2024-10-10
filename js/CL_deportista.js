import CL_estudiante from "./CL_estudiante.js";
export default class CL_deportista extends CL_estudiante{
    constructor(nombre,acumnota,cantMateria,deporte,edad){
        super(nombre,acumnota,cantMateria)
        this.deporte=deporte;
        this.edad=edad;
    }
    set deporte(d){
        this._deporte= d;
    }
    get deporte(){
        return this._deporte;
    }

    set edad(e){
        this._edad= +e;
    }
    get edad(){
        return this._edad;
    }
    admision(){
    if (this.deporte==1){
        if(this.promedio()>14 && this.edad>21)
            return "es admitido en beisbol";
        else 
        return "no es admitido en beisbol";
    }
    else 
    if(this.deporte==2){
        if(this.promedio()>=12 && this.edad>=19)
            return "es admitido en futbol";
        else 
        return "no es admitido en futbol";
    }
    else
    return "error: ingrese solo 1(beisbol) 2(futbol)"

}

}