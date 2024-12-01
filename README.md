## Proyecto de Ensamblador de Computadoras con el Patron Builder en Node.js
Este proyecto implementa el **patron de diseño Builder** en Node.js para construir computadoras personalizadas. El sistema permite configurar diferentes aspectos de una computadora (procesador, RAM, almacenamiento y gráfica) y definir configuraciones estándar como Gaming, Oficina y Básica.

## Estructura del Proyecto

│   index.js                     # Punto de entrada de la aplicacion
│   package-lock.json            # Archivo de dependencias
│   package.json                 # Archivo de configuracion de dependencias
│   README.md                    # Documentacion del proyecto
│
└───ensamblador                  # Clases principales del ensamblador
        Computadora.js           # Clase que representa una computadora
        ConstructorComputadora.js # Builder para construir computadoras
        DirectorComputadora.js   # Director para definir configuraciones estándar

## Ejecute el programa 
Para correr el programa escriba **node index.js** sobre la terminal donde esta abierto el programa.

## Flujo de Ejecucion
Computadora [Procesador: Intel i9, RAM: 32GB DDR5, Almacenamiento: 1TB SSD, Gráfica: NVIDIA RTX 4090]
Computadora [Procesador: Intel i5, RAM: 16GB DDR4, Almacenamiento: 512GB SSD, Gráfica: Integrada]
Computadora [Procesador: AMD Ryzen 3, RAM: 8GB DDR4, Almacenamiento: 256GB SSD, Gráfica: Integrada]

## Clases Principales y Métodos
1. Clase Computadora (ensamblador/Computadora.js) --> Representa una computadora con los siguientes atributos configurables: Procesador, RAM, Almacenamiento, Grafica
**Metodos principales**
    1. setProcesador(procesador) --> Establece el procesador de la computadora.
    2. setRam(ram) --> Establece la memoria RAM.
    2. setAlmacenamiento(almacenamiento): Establece el almacenamiento.
    3. setGrafica(grafica) --> Establece la tarjeta gráfica.
    4. toString() --> Retorna una representacion legible de la computadora.
2. Clase ConstructorComputadora (ensamblador/ConstructorComputadora.js) --> Es el Builder que permite configurar una computadora paso a paso.
**Metodos principales**
    1. setProcesador(procesador) --> Configura el procesador.
    2. setRam(ram) --> Configura la memoria RAM.
    3. setAlmacenamiento(almacenamiento) --> Configura el almacenamiento.
    4. setGrafica(grafica) --> Configura la tarjeta gráfica.
    5. build() --> Devuelve el objeto Computadora configurado.
3. Clase DirectorComputadora (ensamblador/DirectorComputadora.js) --> Es el Director que define configuraciones estándar para computadoras.
**Metodos principales**
    1. construirGamingPC(builder) --> Construye una PC gaming con caracteristicas avanzadas.
    2. construirOficinaPC(builder) --> Construye una PC de oficina con caracteristicas equilibradas.
    3. construirBasicaPC(builder)--> Construye una PC básica con caracteristicas minimas.

## Implementacion del Patron Builder
El Patron Builder permite construir objetos complejos paso a paso. Dentro del proyecto el Builder (ConstructorComputadora) define los métodos para configurar los atributos de una computadora. La clase Director (DirectorComputadora) encapsula las configuraciones estándar para facilitar la construccion de computadoras comunes.
La separacion facilita la extension del sistema para agregar nuevas configuraciones sin modificar las clases existentes. Este patron es útil cuando el objeto a construir tiene múltiples configuraciones posibles, como es el caso de las computadoras personalizadas.
