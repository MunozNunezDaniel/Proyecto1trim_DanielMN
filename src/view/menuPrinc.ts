import { leerTeclado } from './entradaTeclado'

export const menuPrinc = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Añadir ordenadores')
    console.log('2.- Listar todos los ordenadores')
    console.log('3.- Modificar ordenadores')
    console.log('4.- Eliminar ordenadores')
    console.log('5.- Ver un solo ordenador')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}

export const tipos = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Añadir ordenador')
    console.log('2.- Añadir ordenador sobremesa')
    console.log('3.- Añadir ordenador portatil')
    console.log('4.- Salir')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}