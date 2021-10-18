import { Ordenador } from './ordenador';
export class Portatil extends Ordenador { //Mediante la palabra clave extends indicamos el nombre de la clase padre.
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
    // sobre escribimos el método, si la pantalla es ips el portatil es un 10% mas barato
    precio(): number {
      let precio: number;
      precio = super.precio();
      if (this._tipoPantalla == 'ips') {
        precio -= 0.1 * precio;
      }
      return precio;
    }

    todo(){
      let resultado: string
      resultado = `${super.todo()}, Tipo de pantalla: ${this._tipoPantalla}, Duracion de batería: ${this._duracionBateria}`
      return resultado
    }
  }
  exports.Portatil = Portatil;