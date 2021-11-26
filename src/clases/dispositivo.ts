export class Dispositivo {
  private _id:string;
  protected _F_fabric: Date;
  protected _precioBase: number; //Para acceder a la subclase
  private _Wifi: boolean;

  constructor(
    id:string, 
    F_fabric:Date,
    precioBase: number,
    Wifi: boolean
  )
  {
    this._id = id;
    this._F_fabric = F_fabric;
    this._precioBase = precioBase;
    this._Wifi = Wifi;
  }

  get id() {
    return this._id;
  }
  get F_fabric() {
    return this._F_fabric;
  }
  get precioBase() {
    return this._precioBase;
  }
  get Wifi() {
    return this._Wifi;
  }

  
  //si tiene Wifi es un 5% mas caro

  precioFinal(): number {
    let precio: number
    let Wifi: boolean
    precio = this._precioBase
    Wifi = this._Wifi
    if (Wifi == true) {
      precio += 0.05 * precio;
    }
    return precio
  }

  todo() {
    return `Identificador: ${this._id},
    Fecha de fabricación: ${this._F_fabric}, 
    Precio Base: ${this._precioBase}, 
    Wifi: ${this._Wifi},`;
  }
}


