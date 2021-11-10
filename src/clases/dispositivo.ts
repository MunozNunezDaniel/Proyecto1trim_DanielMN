export class Dispositivo {
  protected _id_dispositivo:string;
  protected _F_fabric: Date;
  private _tipo_disp: string;

  constructor(id_dispositivo:string, F_fabric:Date, tipo_disp: string) {
    this._id_dispositivo = id_dispositivo;
    this._F_fabric = F_fabric;
    this._tipo_disp = tipo_disp;
  }

  get id_dispositivo() {
    return this._id_dispositivo;
  }
  get F_fabric() {
    return this._F_fabric;
  }
  get tipo_disp() {
    return this._tipo_disp;
  }
}
  //si tiene grafica dedicada es mas cara
  /*
  precio(): number {
    let precio: number;
    precio = this._precioBase;
    if (this._graficaDedicada == true) {
      precio += 0.5 * precio;
    }
    return precio;
  }
  todo() {
    return `Identificador: ${this._id}, Precio base: ${this._precioBase}, Consumo Máximo: ${this._comsumoMaximo}, Capacidad de la RAM: ${this._capacidadRAM}, Tarjeta Grafica Dedicada: ${this._graficaDedicada},`;
  }
}
*/

