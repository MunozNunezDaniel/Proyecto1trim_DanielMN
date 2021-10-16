export class Ordenador {
  protected _precioBase: number; // para acceder en la subclase
  private _comsumoMaximo: number;
  private _capacidadRAM: number;
  private _graficaDedicada: Boolean;
  
  constructor(precioBase: number, comsumoMaximo: number, capacidadRAM: number, graficaDedicada: Boolean) {
    this._precioBase = precioBase;
    this._comsumoMaximo = comsumoMaximo;
    this._capacidadRAM = capacidadRAM;
    this._graficaDedicada = graficaDedicada;
  }
  get precioBase() {
    return this._precioBase;
  }
  get comsumoMaximo() {
    return this._comsumoMaximo;
  }
  get capacidadRAM() {
    return this._capacidadRAM;
  }
  get graficaDedicada() {
    return this._graficaDedicada;
  }

  precio(): number {
    let precio: number;
    precio = this._precioBase;
    if (this._comsumoMaximo > 150) {
      precio += 0.2 * precio;
    }
    return precio;
  }
  todo() {
    return `Precio base: ${this._precioBase}, Consumo Máximo: ${this._comsumoMaximo}`;
  }
}
