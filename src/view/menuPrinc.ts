import { leerTeclado } from './entradaTeclado'

export const menuPrinc = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Gestionar Dispositivos')
    console.log('2.- Gestionar Pedidos')
    console.log('3.- Calcular Precio final de los dispositivos')
    console.log('4.- Calcular Coste del envio de los pedidos')
    console.log('5.- Añadir datos de prueba')
    console.log('6.- Salir')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}

export const menuDisp = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Añadir Dispositivo')
    console.log('2.- Guardar Dispositivo')
    console.log('3.- Listar todos los Dispositivos')
    console.log('4.- Eliminar Dispositivo')
    console.log('5.- Actualizar tipo de pantalla, amoled o ips') //Campo private en la subclase
    console.log('6.- Salir')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}

export const menuPedido = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Añadir Pedido')
    console.log('2.- Guardar Pedido')
    console.log('3.- Listar todos los Pedidos')
    console.log('4.- Eliminar Pedido')
    console.log('5.- Actualizar direccion del envío') //Campo private en la superclase
    console.log('6.- Salir')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}

