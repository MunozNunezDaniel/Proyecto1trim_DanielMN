import { Dispositivo } from './dispositivo';

//Poner un metodo que aumente o disminuya el precio final si tiene grafica dedicada y si ha sido fabricado despues del Covid (declarar la variable F_covid en el metodo como un campo fijo)

export class Ordenador extends Dispositivo {
  private _F_covid: Date;
  private _grafica_dedic: boolean;

  constructor(
    _id: string, 
    _F_fabric: Date, 
    _precioBase: number,
    _Wifi: boolean,
    grafica_dedic: boolean,
    F_covid: Date
    ) 
    {
    super(_id, _F_fabric, _precioBase, _Wifi);
    this._grafica_dedic = grafica_dedic;
    this._F_covid = F_covid;
  }
  get grafica_dedic() {
      return this._grafica_dedic;
    }
  get F_covid() {
    return this._F_covid;
  }

    /*
    salarioFinal(): number | any{
    let salario : number;
    salario = super.salarioFinal();
    let peligrosidad : Boolean;
    let permisos : number;
    let salarioFinal : number;
    permisos = this._permisos;
    peligrosidad = this._peligrosidad;
    let salarioA : number
    let salarioB : number 
    if (this._expedientes == false){
        
        if (peligrosidad == true) {
             salarioA = salario + 200;
                if (permisos > 2 ){
                      salarioB = salarioA + 75;
                      return salarioB
                } else {
                      salarioB=0;
                }
                salarioFinal=salarioA+salarioB;
                return salarioFinal
        } else {
            salarioA = salario
                if (permisos > 2 ){
                    salarioB = salarioA + 75;
                    return salarioB
                } else {
                    salarioB=0;
               }
            salarioFinal=salarioA+salarioB;
            return salarioFinal
        }
        

    }else {
      
      if (peligrosidad == true) {
          salarioA = (salario + 200)*0.95;
               if (permisos > 2 ){
                      salarioB = (salarioA + (75*0.95));
                      return salarioB
              } else {
                      salarioB=0;
              } 
              salarioFinal=salarioA+salarioB;
              return salarioFinal         
       } else {
         salarioA=salario*0.95;
              if (permisos > 2 ){
                    salarioB = (salarioA + (75*0.95));
                    return salarioB
              } else {
                    salarioB=0;
              }  
       }
        salarioFinal=salarioA+salarioB;
        return salarioFinal
      }
     


  }
  todo(){
    let resultado: string
    resultado = `${super.todo()}, Complemento de peligrosidad: ${this._peligrosidad}, Permisos Maquinas (nº): ${this._permisos} `
    return resultado
  }
    */
    }
    //Inventar un metodo que se vaya sobrescribiendo en las clases, un mismo calculo que cambie en funcion del tipo de dispositivo
