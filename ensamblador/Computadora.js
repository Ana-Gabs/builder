class Computadora {
    constructor() {
        this.procesador = '';
        this.ram = '';
        this.almacenamiento = '';
        this.grafica = '';
    }

    setProcesador(procesador) {
        this.procesador = procesador;
    }

    setRam(ram) {
        this.ram = ram;
    }

    setAlmacenamiento(almacenamiento) {
        this.almacenamiento = almacenamiento;
    }

    setGrafica(grafica) {
        this.grafica = grafica;
    }

    toString() {
        return `Computadora [Procesador: ${this.procesador}, RAM: ${this.ram}, Almacenamiento: ${this.almacenamiento}, Gráfica: ${this.grafica}]`;
    }
}

module.exports = Computadora;
