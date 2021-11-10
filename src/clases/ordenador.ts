import { Dispositivo } from './dispositivo';
export class Ordenador extends Dispositivo {
  private _precio_base: number;
  private _tipo_ordenador: string;
  private _grafica_dedic: boolean;
  private _cap_disco: string;

  constructor(_id_dispositivo:string, _F_fabric:Date, _tipo_disp: string, precio_base:number, tipo_ordenador:string, grafica_dedic: boolean, cap_disco:string) {
    super(_id_dispositivo, _F_fabric, _tipo_disp); //ver que hacer con el campo que falta
    this._precio_base = precio_base;
    this._tipo_ordenador = tipo_ordenador;
    this._grafica_dedic = grafica_dedic;
    this._cap_disco = cap_disco;
  }
  get precio_base() {
      return this._precio_base;
    }
  get tipo_ordenador() {
        return this._tipo_ordenador;
    }
  get grafica_dedic() {
      return this._grafica_dedic;
    }
  get cap_disco() {
      return this._cap_disco;
    }
    /*
    // sobre escribimos el método, si la pantalla es ips el Ordenador es un 10% mas barato
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
    */
  }
  exports.Ordenador = Ordenador;