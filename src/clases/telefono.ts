import { Dispositivo } from './dispositivo';

export class Telefono extends Dispositivo {
  private _tipo_pantalla: string;

  constructor(
    _id: string, 
    _F_fabric: Date, 
    _precioBase: number,
    _Wifi: boolean,
    tipo_pantalla: string, 
  ) 
  {
    super(_id, _F_fabric, _precioBase, _Wifi);
    this._tipo_pantalla = tipo_pantalla;
  }
  get tipo_pantalla() {
    return this._tipo_pantalla;
  }

  set tipo_pantalla(newPantalla: string){    // Necesario para poder modificar
    this._tipo_pantalla = newPantalla
  }

  //Si el tipo de pantalla es amoled el precio aumenta un 20%
  precioFinal(): number {
    let precio: number
    let pantalla: string
    precio = this._precioBase
    pantalla = this._tipo_pantalla
    if (pantalla == "amoled") {
      precio += 0.2 * precio;
    }
    return precio
  }
}
