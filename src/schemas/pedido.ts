import {Schema, model } from 'mongoose'
import {Dispositivo } from './../clases/dispositivo'
import {Pedido } from './../clases/pedido'

// Definimos el Schema, lo mas complejo de la coleccion
const pedidoSchema = new Schema({
    _tipoObjeto: {
        type: String  //Valores "Ped, "Rep", "Progr"
    },
    _id_pedido: {
        type: String
    },
    _PrecioEnvio: {
        type: Number
    },
    _tipo_servicio: {
        type: String
    },
    _direccion_envio: {
        type: String
    },
    _dispositivo: {
        type: Array
    },
    _internacional: {
        type: Boolean
    },
    _retraso: {
        type: Boolean
    },
})


export type Ped = {
    _tipoObjeto: String | null,
    _id_pedido: String | null,
    _PrecioEnvio: Number | null,
    _tipo_servicio: String | null,
    _direccion_envio: String | null,
    _dispositivo: Array<Dispositivo> | null,
  }

  export type Rep = {
    _tipoObjeto: String | null,
    _id_pedido: String | null,
    _PrecioEnvio: Number | null,
    _tipo_servicio: String | null,
    _direccion_envio: String | null,
    _dispositivo: Array<Dispositivo> | null,
    _internacional: Boolean
  }

  export type Progr = {
    _tipoObjeto: String | null,
    _id_pedido: String | null,
    _PrecioEnvio: Number | null,
    _tipo_servicio: String | null,
    _direccion_envio: String | null,
    _dispositivo: Array<Dispositivo> | null,
    _retraso: Boolean
}

// La colección de la BD (Plural siempre)
export const Pedidos = model('pedidos', pedidoSchema)