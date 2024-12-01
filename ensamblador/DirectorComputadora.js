const ConstructorComputadora = require('./ConstructorComputadora');

class DirectorComputadora {
    static construirGamingPC(builder) {
        return builder
            .setProcesador('Intel i9')
            .setRam('32GB DDR5')
            .setAlmacenamiento('1TB SSD')
            .setGrafica('NVIDIA RTX 4090')
            .build();
    }

    static construirOficinaPC(builder) {
        return builder
            .setProcesador('Intel i5')
            .setRam('16GB DDR4')
            .setAlmacenamiento('512GB SSD')
            .setGrafica('Integrada')
            .build();
    }

    static construirBasicaPC(builder) {
        return builder
            .setProcesador('AMD Ryzen 3')
            .setRam('8GB DDR4')
            .setAlmacenamiento('256GB SSD')
            .setGrafica('Integrada')
            .build();
    }
}

module.exports = DirectorComputadora;
