import { Ordenador } from './ordenador';
export class Sobremesa extends Ordenador { //extend se utiliza para 
  private _refrigeracion: string;

  constructor(precioBase: number, comsumoMaximo: number, refrigeracion: string) {
    super(precioBase, comsumoMaximo, capacidadRAM, graficaDedicada);
    this._refrigeracion = refrigeracion;
  }
  get refrigeracion() {
    return this._refrigeracion;
  }
  get prueba(){
    return this._precioBase  // solo accedo si es protected
  }
  // sobre escribimos el método
  precio(): number {
    let precio: number;
    precio = super.precio();
    if (this._refrigeracion == '4x4') {
      precio += 0.1 * precio;
    }
    return precio;
  }

  todo(){
    let resultado: string
    resultado = `${super.todo()}, Tipo de refrigeracion: ${this._refrigeracion}`
    return resultado
  }
}
