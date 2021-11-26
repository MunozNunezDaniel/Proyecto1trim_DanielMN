import { Dispositivo } from "./dispositivo";

export class Pedido {
    private _id_pedido: string;
    protected _PrecioEnvio: number; // para acceder en la subclase
    private _tipo_servicio: string; //Poner en el menu que sea express o estandar
    private _direccion_envio: string; //Poner en el menu que sea express o estandar
    private _dispositivo: Array<Dispositivo>;
    constructor(
        id_pedido: string, 
        PrecioEnvio: number, 
        tipo_servicio: string,
        direccion_envio: string
        ) 
        {
        this._id_pedido = id_pedido;
        this._PrecioEnvio = PrecioEnvio;
        this._tipo_servicio = tipo_servicio;
        this._direccion_envio = direccion_envio;
        this._dispositivo = new Array<Dispositivo>();
    }

  get id_pedido() {
    return this._id_pedido;
  }

  get PrecioEnvio() {
    return this._PrecioEnvio;
  }

  get tipo_servicio() {
    return this._tipo_servicio;
  }

  get direccion_envio() {
    return this._direccion_envio;
  }

  set direccion_envio(newDireccion: string){    // Necesario para poder modificar
    this._direccion_envio = newDireccion
  }

  get dispositivo() {
    return this._dispositivo;
  }

//Si el envio es express se le aplica un recargo de 15% sobre el coste envio

  costeFinal(): number {
    let costeFinal: number
    let tipo_servicio: string
    costeFinal = this._PrecioEnvio
    tipo_servicio = this._tipo_servicio
    if (tipo_servicio == "express") {
        costeFinal += 0.15 * costeFinal;
    }
    return costeFinal
  }
  todo() {
    return `Identificador del pedido: ${this._id_pedido},
    Precio del envio: ${this._PrecioEnvio}, 
    Tipo del servicio: ${this._tipo_servicio},
    Dispositivos: ${this._dispositivo}`;
  }
}