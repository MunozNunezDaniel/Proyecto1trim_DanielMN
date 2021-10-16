import { Automovil } from './automovil';
export class TodoTerreno extends Automovil { //extend se utiliza para 
  private _traccion: string;
  constructor(precioBase: number, potenciaMotor: number, traccion: string) {
    super(precioBase, potenciaMotor);
    this._traccion = traccion;
  }
  get traccion() {
    return this._traccion;
  }
  get prueba(){
    return this._precioBase  // solo accedo si es protected
  }
  // sobre escribimos el método
  precio(): number {
    let precio: number;
    precio = super.precio();
    if (this._traccion == '4x4') {
      precio += 0.1 * precio;
    }
    return precio;
  }

  todo(){
    let resultado: string
    resultado = `${super.todo()}, tracción: ${this._traccion}`
    return resultado
  }
}
