import { Ordenador } from './ordenador';
export class Portatil extends Ordenador { //extend se utiliza para 
    private _tipoPantalla: string;
    private _duracionBateria: string;
  
    constructor(id: string, precioBase: number, comsumoMaximo: number, capacidadRAM: number, graficaDedicada: boolean, tipoPantalla: string, duracionBateria: string) {
        super(id, precioBase, comsumoMaximo, capacidadRAM, graficaDedicada);
        this._tipoPantalla = tipoPantalla;
        this._duracionBateria = duracionBateria;
      }
    get tipoPantalla() {
      return this._tipoPantalla;
    }
    get duracionBateria() {
        return this._duracionBateria;
    }
    // sobre escribimos el método
    /*
    precio(): number {
      let precio: number;
      precio = super.precio();
      if (this._refrigeracion == '4x4') {
        precio += 0.1 * precio;
      }
      return precio;
    }
  */
    todo(){
      let resultado: string
      resultado = `${super.todo()}, Tipo de pantalla: ${this._tipoPantalla}, Duracion de batería: ${this._duracionBateria}`
      return resultado
    }
  }
  exports.Portatil = Portatil;