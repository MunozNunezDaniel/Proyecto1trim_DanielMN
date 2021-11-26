import { Pedido } from "./pedido";

//Estos pedidos se hacen a otro almacen para reponer stock faltante
export class Reposicion extends Pedido {
    private _internacional: boolean;
    constructor(
        id_pedido: string, 
        PrecioEnvio: number, 
        tipo_servicio: string,
        direccion_envio: string,
        internacional: boolean
        ) {
        super(id_pedido, PrecioEnvio, tipo_servicio, direccion_envio);
        this._internacional = internacional;
      }
    
      get PrecioEnvio() {
        return this._PrecioEnvio;
      }

      get internacional() {
        return this._internacional;
      }

//Si el envio es internacional se le aplica un recargo de 21% sobre el coste envio debido a las tasas aduaneras

  costeFinal(): number {
    let costeFinal: number
    let internacional: boolean
    costeFinal = this._PrecioEnvio
    internacional = this._internacional
    if (internacional == true) {
        costeFinal += 0.21 * costeFinal;
    }
    return costeFinal
  }
  todo(){
    let resultado: string
    resultado = `${super.todo()}, Envio internacional: ${this._internacional}`
    return resultado
  }
}