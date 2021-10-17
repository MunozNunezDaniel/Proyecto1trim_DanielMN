import { Ordenador } from './ordenador';
export class Sobremesa extends Ordenador { //extend se utiliza para 
    private _refrigeracion: string;
    private _modeloCaja: string;

    constructor(id: string, precioBase: number, comsumoMaximo: number, capacidadRAM: number, graficaDedicada: boolean, refrigeracion: string, modeloCaja: string) {
        super( id, precioBase, comsumoMaximo, capacidadRAM, graficaDedicada);
        this._refrigeracion = refrigeracion;
        this._modeloCaja = modeloCaja;
      }
    get refrigeracion() {
      return this._refrigeracion;
    }
    get modeloCaja() {
      return this._modeloCaja;
    }
    // sobreescribimos el método, si tiene refrigeracion liquida es mas caro
    precio(): number {
      let precio: number;
      precio = super.precio();
      if (this._refrigeracion == 'liquida') {
        precio += 0.3 * precio;
      }
      return precio;
    }

    todo(){
      let resultado: string
      resultado = `${super.todo()}, Tipo de refrigeracion: ${this._refrigeracion}, Modelo de Caja: ${this._modeloCaja}`
      return resultado
    }
}
exports.Sobremesa = Sobremesa;