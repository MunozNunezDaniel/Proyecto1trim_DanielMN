import {Schema, model } from 'mongoose'
// Definimos el Schema, lo mas complejo de la coleccion
const dispositivoSchema = new Schema({
    _tipoObjeto: {
        type: String  //Valores "Disp, "Ord", "Telf"
    },
    _id: {
        type: String
    },
    _F_fabric: {
        type: Date
    },
    _precioBase: {
        type: Number
    },
    _Wifi: {
        type: Boolean
    },
    _F_covid: {
        type: Date
    },
    _grafica_dedic: {
        type: Boolean
    },
    _tipo_pantalla: {
        type: String
    },
})


export type Disp = {
    _tipoObjeto: string | null,
    _id: String | null,
    _F_fabric: Date | null,
    _precioBase: Number | null,
    _Wifi: Boolean | null
}

export type Ord = {
    _tipoObjeto: string | null,
    _id: String | null,
    _F_fabric: Date | null,
    _precioBase: Number | null,
    _Wifi: Boolean | null,
    _F_covid: Date | null,
    _grafica_dedic: Boolean | null
}

export type Telf = {
    _tipoObjeto: string | null,
    _id: String | null,
    _F_fabric: Date | null,
    _precioBase: Number | null,
    _Wifi: Boolean | null,
    _tipo_pantalla: String | null
}

// La colección de la BD (Plural siempre)
export const Dispositivos = model('dispositivos', dispositivoSchema)