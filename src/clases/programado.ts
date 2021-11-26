import { Pedido } from "./pedido";

//Son pedidos que se hacen a otro almacen para 
export class Programado extends Pedido {
    private _retraso: Boolean;
    constructor (
        id_pedido: string, 
        PrecioEnvio: number, 
        tipo_servicio: string,
        direccion_envio: string,
        retraso: Boolean
        ) {
        super(id_pedido, PrecioEnvio, tipo_servicio, direccion_envio);
        this._retraso = retraso;
      }
      get retraso() {
        return this._retraso;
      }
      get PrecioEnvio(){
        return this._PrecioEnvio 
      }

/* 
Si el envio se ha retrasado el proveedor ofrece un reembolso del 15% sobre el coste del envio
*/
  costeFinal(): number {
    let costeFinal: number
    let retraso: Boolean
    costeFinal = this._PrecioEnvio
    retraso = this._retraso
    if (retraso == true) {
        costeFinal -= 0.15 * costeFinal;
    }
    return costeFinal
  }

  todo(){
    let resultado: string
    resultado = `${super.todo()}, 
    Envio retrasado: ${this._retraso},
    Coste final del envio: ${this._PrecioEnvio}`
    return resultado
  }
}