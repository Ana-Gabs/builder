const Computadora = require('./Computadora');

class ConstructorComputadora {
    constructor() {
        this.computadora = new Computadora();
    }

    setProcesador(procesador) {
        this.computadora.setProcesador(procesador);
        return this;
    }

    setRam(ram) {
        this.computadora.setRam(ram);
        return this;
    }

    setAlmacenamiento(almacenamiento) {
        this.computadora.setAlmacenamiento(almacenamiento);
        return this;
    }

    setGrafica(grafica) {
        this.computadora.setGrafica(grafica);
        return this;
    }

    build() {
        return this.computadora;
    }
}

module.exports = ConstructorComputadora;
